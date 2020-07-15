from django.contrib import admin
from .models import Product, Category, Unit, Presentation

# Register your models here.
admin.site.register(Presentation)
admin.site.register(Unit)
admin.site.register(Product)
admin.site.register(Category)