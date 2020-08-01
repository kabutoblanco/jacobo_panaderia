from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Product, ProductPresentation
from .serializers import (
    ProductSerializer,
    RegisterSerializer,
    UpdateSerializer,
    ProductPresentationSerializer,
    ProductInventorySerializer
)

import json


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save()
        return Response(
            {
                "product": ProductSerializer(
                    product, context=self.get_serializer_context()
                ).data
            }
        )


class UpdateAPI(generics.GenericAPIView):
    serializer_class = UpdateSerializer

    def post(self, request, *args, **kwargs):
        product = Product.objects.get(pk=request.data["id"])
        serializer = self.get_serializer(instance=product, data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save()
        return Response(
            {
                "product": ProductSerializer(
                    product, context=self.get_serializer_context()
                ).data
            }
        )


class ListAPI(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        category = kwargs["name"]
        type = kwargs["type"]
        queryset = Product.objects.filter(category__name=category, is_active=True)
        if type == 1:
            queryset = queryset.filter(is_store=True)
            return Response({"products": ProductSerializer(queryset, many=True).data})
        else:
            return Response({"products": ProductInventorySerializer(queryset, many=True).data})


class DetailCartAPI(generics.RetrieveAPIView):
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        ids = json.loads(kwargs["ids"])
        queryset = ProductPresentation.objects.filter(id__in=ids)
        return Response(
            {"products": ProductPresentationSerializer(queryset, many=True).data}
        )
