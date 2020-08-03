from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Product, ProductPresentation, Duty, Sale, Buy
from .serializers import (SaleSerializer, RegisterSaleSerializer,
                          RegisterDetailSerializer, RegisterPaySerializer,
                          RegisterBuySerializer)

import json


class RegisterSaleAPI(generics.GenericAPIView):
    serializer_class = RegisterSaleSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data["action"])
        serializer.is_valid(raise_exception=True)
        sale = serializer.save()
        Sale.helper.register_details({
            "data": request.data,
            "action": sale,
            "serializer": RegisterDetailSerializer,
            "is_sale": True
        })
        Sale.helper.register_duties({"data": request.data, "action": sale})
        Sale.helper.register_pays({
            "data": request.data,
            "action": sale,
            "serializer": RegisterPaySerializer
        })
        return Response({
            "sale":
            SaleSerializer(sale, context=self.get_serializer_context()).data
        })


class RegisterBuyAPI(generics.GenericAPIView):
    serializer_class = RegisterBuySerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data["action"])
        serializer.is_valid(raise_exception=True)
        buy = serializer.save()
        Buy.helper.register_details({
            "data": request.data,
            "action": buy,
            "serializer": RegisterDetailSerializer,
            "is_sale": False
        })
        Buy.helper.register_duties({"data": request.data, "action": buy})
        Buy.helper.register_pays({
            "data": request.data,
            "action": buy,
            "serializer": RegisterPaySerializer
        })
        return Response({
            "buy":
            SaleSerializer(buy, context=self.get_serializer_context()).data
        })
    