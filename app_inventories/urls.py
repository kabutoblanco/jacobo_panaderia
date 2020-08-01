from django.urls import path, include
from .api import RegisterSaleAPI

urlpatterns = [
    path('api/sales', RegisterSaleAPI.as_view()),
]