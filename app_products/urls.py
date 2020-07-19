from django.urls import path, include
from .api import RegisterAPI, UpdateAPI, ListAPI, ProductAPI

urlpatterns = [
    path('api/register', RegisterAPI.as_view()),
    path('api/update', UpdateAPI.as_view()),
    path('api/list/<str:category>/', ListAPI.as_view()),
    path('api/product/<str:products>/', ProductAPI.as_view())
]