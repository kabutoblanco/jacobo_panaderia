from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Product, ProductPresentation
from .serializers import (
    SaleSerializer,
    RegisterSaleSerializer
)

import json


class RegisterSaleAPI(generics.GenericAPIView):
    serializer_class = RegisterSaleSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        sale = serializer.save()
        return Response(
            {
                "sale": SaleSerializer(
                    sale, context=self.get_serializer_context()
                ).data
            }
        )