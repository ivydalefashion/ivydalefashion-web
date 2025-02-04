from django.contrib import admin
from .models import Product, Category

#  these are for teh display in the admin
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'inventory']
    search_fields = ['name']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
