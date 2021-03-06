from django.urls import path, include
from .api import RegisterAPI, UpdateAPI, ListAPI

urlpatterns = [
    path('api/register', RegisterAPI.as_view()),
    path('api/update', UpdateAPI.as_view()),
    path('api/list', ListAPI.as_view())
]