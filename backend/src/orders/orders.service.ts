import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  private get include() {
    return {
      items: {
        include: {
          product: { include: { images: { take: 1 } } },
          variant: true,
        },
      },
      address: true,
      user: { select: { id: true, email: true, firstName: true, lastName: true } },
    };
  }

  private generateOrderNumber(): string {
    const date = new Date();
    const datePart = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `IVY-${datePart}-${random}`;
  }

  async findAll(userId?: string, role?: string) {
    const where = role === 'ADMIN' ? {} : { userId };
    return this.prisma.order.findMany({
      where,
      include: this.include,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, userId: string, role: string) {
    const order = await this.prisma.order.findUnique({ where: { id }, include: this.include });
    if (!order) throw new NotFoundException('Order not found');
    if (role !== 'ADMIN' && order.userId !== userId) throw new ForbiddenException();
    return order;
  }

  async create(userId: string, dto: CreateOrderDto) {
    const itemsWithPrices = await Promise.all(
      dto.items.map(async (item) => {
        const product = await this.prisma.product.findUnique({ where: { id: item.productId } });
        if (!product) throw new NotFoundException(`Product ${item.productId} not found`);
        const variant = item.variantId
          ? await this.prisma.productVariant.findUnique({ where: { id: item.variantId } })
          : null;
        const price = variant?.price ?? product.price;
        return {
          productId: item.productId,
          variantId: item.variantId,
          name: product.name,
          price,
          quantity: item.quantity,
          subtotal: price * item.quantity,
        };
      }),
    );

    const subtotal = itemsWithPrices.reduce((sum, i) => sum + i.subtotal, 0);
    const shippingCost = dto.shippingCost ?? 0;
    const discount = dto.discount ?? 0;
    const total = subtotal + shippingCost - discount;

    return this.prisma.order.create({
      data: {
        orderNumber: this.generateOrderNumber(),
        userId,
        addressId: dto.addressId,
        paymentMethod: dto.paymentMethod,
        notes: dto.notes,
        subtotal,
        shippingCost,
        discount,
        total,
        items: { create: itemsWithPrices },
      },
      include: this.include,
    });
  }

  async updateStatus(id: string, dto: UpdateOrderStatusDto) {
    const order = await this.prisma.order.findUnique({ where: { id } });
    if (!order) throw new NotFoundException('Order not found');
    return this.prisma.order.update({
      where: { id },
      data: {
        status: dto.status,
        paymentStatus: dto.paymentStatus,
        trackingNumber: dto.trackingNumber,
      },
      include: this.include,
    });
  }
}
