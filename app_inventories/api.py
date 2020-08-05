from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Product, ProductPresentation, Duty, Sale, Buy
from .serializers import (SaleSerializer, BuySerializer, RegisterSaleSerializer,
                          RegisterDetailSerializer, RegisterPaySerializer,
                          RegisterBuySerializer)

import pytz, datetime


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


class SaleAPI(generics.RetrieveAPIView):
    serializer_class = SaleSerializer

    def get(self, request, *args, **kwargs):
        today_min = pytz.utc.localize(datetime.datetime.combine(
            datetime.date.today(), datetime.time.min))
        today_max = pytz.utc.localize(datetime.datetime.combine(
            datetime.date.today(), datetime.time.max))
        query = Sale.objects.filter(date__range=(today_min, today_max))
        return Response({"sales": SaleSerializer(query, many=True).data})


class BuyAPI(generics.RetrieveAPIView):
    serializer_class = BuySerializer

    def get(self, request, *args, **kwargs):
        today_min = pytz.utc.localize(datetime.datetime.combine(
            datetime.date.today(), datetime.time.min))
        today_max = pytz.utc.localize(datetime.datetime.combine(
            datetime.date.today(), datetime.time.max))
        query = Buy.objects.filter(date__range=(today_min, today_max))
        return Response({"buys": BuySerializer(query, many=True).data})
