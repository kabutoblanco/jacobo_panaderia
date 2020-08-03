from django.contrib import admin
from .models import Product, Category, Unit, Presentation, ProductPresentation, Duty

# Register your models here.
admin.site.register(Presentation)
admin.site.register(ProductPresentation)
admin.site.register(Unit)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Duty)