from django.urls import path, include
from .api import RegisterSaleAPI, RegisterBuyAPI, SaleAPI, BuyAPI

urlpatterns = [
    path('api/sales', RegisterSaleAPI.as_view()),
    path('api/buys', RegisterBuyAPI.as_view()),
    path('api/sales/list', SaleAPI.as_view()),
    path('api/buys/list', BuyAPI.as_view())
]
