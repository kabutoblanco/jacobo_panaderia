from django.contrib import admin
from .models import Sale, Buy, Pay, Detail, Action

# Register your models here.
admin.site.register(Action)
admin.site.register(Sale)
admin.site.register(Buy)
admin.site.register(Pay)
admin.site.register(Detail)