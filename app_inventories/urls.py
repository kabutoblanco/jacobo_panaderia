from django.urls import path, include
from .api import RegisterSaleAPI, RegisterBuyAPI

urlpatterns = [
    path('api/sales', RegisterSaleAPI.as_view()),
    path('api/buys', RegisterBuyAPI.as_view())
]