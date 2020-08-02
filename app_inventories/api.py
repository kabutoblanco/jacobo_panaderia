from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Product, ProductPresentation
from .serializers import (
    SaleSerializer,
    RegisterSaleSerializer,
    RegisterDetailSerializer,
    RegisterPaySerializer
)

import json


class RegisterSaleAPI(generics.GenericAPIView):
    serializer_class = RegisterSaleSerializer

    def post(self, request, *args, **kwargs):
        # serializer = self.get_serializer(data=request.data["sale"])
        # serializer.is_valid(raise_exception=True)
        # sale = serializer.save()
        # Register details
        serializer_class = RegisterDetailSerializer
        total = 0
        for detail in request.data["details"]:
            # serializer = self.get_serializer(data=detail)
            # serializer.is_valid(raise_exception=True)
            # detail = serializer.save()
            detail["action"] = 54
            total += detail["subtotal"]
            print(detail)
        print(total)
        # Register pays
        for pay in request.data["pays"]:
            # serializer = self.get_serializer(data=detail)
            # serializer.is_valid(raise_exception=True)
            # detail = serializer.save()
            pay["action"] = 54
            total += detail["subtotal"]
            print(detail)
        print(total)
        return Response(
            {
                # "sale": SaleSerializer(
                #     sale, context=self.get_serializer_context()
                # ).data
                "estado": "ok"
            }
        )