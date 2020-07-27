from django.contrib import admin
from .models import Sale, Buy, Pay, Duty, Detail

# Register your models here.
admin.site.register(Sale)
admin.site.register(Buy)
admin.site.register(Pay)
admin.site.register(Duty)
admin.site.register(Detail)