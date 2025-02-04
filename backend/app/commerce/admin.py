from django.contrib import admin
from .models import Product, Category, ProductImage, Inventory, InventoryTransaction, Order, OrderItem

#  these are for teh display in the admin
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'inventory']
    search_fields = ['name']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

class ProductImageAdmin(admin.ModelAdmin):
    exclude = ('s3_key',)

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(ProductImage, ProductImageAdmin)
admin.site.register(InventoryTransaction)
admin.site.register(Inventory)
admin.site.register(Order)
admin.site.register(OrderItem)

