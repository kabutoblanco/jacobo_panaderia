from django.urls import path, include
from .api import RegisterAPI, UpdateAPI, ListAPI, DetailCartAPI

urlpatterns = [
    path('api/products', RegisterAPI.as_view()),
    path('api/products/<int:id>', UpdateAPI.as_view()),
    path('api/carts/<str:ids>/products', DetailCartAPI.as_view()),
    path('api/categories/<str:name>/<int:type>/products', ListAPI.as_view()),
]