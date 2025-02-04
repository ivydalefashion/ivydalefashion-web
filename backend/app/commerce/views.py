from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db import transaction
from django.conf import settings
import boto3


from botocore.exceptions import ClientError

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['post'])
    def upload_images(self, request, pk=None):
        product = self.get_object()
        files = request.FILES.getlist('images')
        
        try:
            s3_client = boto3.client(
                's3',
                aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
                region_name=settings.AWS_S3_REGION_NAME
            )
            
            uploaded_images = []
            for file in files:
                # Generate unique S3 key
                s3_key = f'products/{product.id}/{file.name}'
                
                # Upload to S3
                s3_client.upload_fileobj(
                    file,
                    settings.AWS_STORAGE_BUCKET_NAME,
                    s3_key,
                    ExtraArgs={'ACL': 'public-read'}
                )
                
                # Create ProductImage record
                image = ProductImage.objects.create(
                    product=product,
                    s3_key=s3_key,
                    is_primary=len(uploaded_images) == 0  # First image is primary
                )
                uploaded_images.append(image)
                
            return Response({
                'message': f'Successfully uploaded {len(uploaded_images)} images',
                'images': ProductImageSerializer(uploaded_images, many=True).data
            })
            
        except ClientError as e:
            return Response({
                'error': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    @transaction.atomic
    def create(self, request, *args, **kwargs):
        # Validate items in stock
        items_data = request.data.get('items', [])
        for item in items_data:
            product = Product.objects.get(id=item['product'])
            if product.inventory.quantity < item['quantity']:
                return Response({
                    'error': f'Insufficient stock for product {product.name}'
                }, status=status.HTTP_400_BAD_REQUEST)
        
        # Create order
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        order = serializer.save(user=request.user)
        
        # Create order items and update inventory
        total_amount = 0
        for item in items_data:
            product = Product.objects.get(id=item['product'])
            quantity = item['quantity']
            
            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=quantity,
                price=product.price
            )
            
            # Update inventory
            inventory = product.inventory
            inventory.quantity -= quantity
            inventory.save()
            
            # Record transaction
            InventoryTransaction.objects.create(
                inventory=inventory,
                quantity=-quantity,
                transaction_type='OUT',
                reference=order.order_number
            )
            
            total_amount += product.price * quantity
        
        order.total_amount = total_amount
        order.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)