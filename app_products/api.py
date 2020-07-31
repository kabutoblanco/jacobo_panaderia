from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Product, ProductPresentation
from .serializers import (
    ProductSerializer,
    RegisterSerializer,
    UpdateSerializer,
    ProductPresentationSerializer,
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
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        category = kwargs["name"]
        queryset = Product.objects.filter(category__name=category)
        return Response({"products": ProductSerializer(queryset, many=True).data})


class DetailCartAPI(generics.RetrieveAPIView):
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        ids = json.loads(kwargs["ids"])
        queryset = ProductPresentation.objects.filter(id__in=ids)
        return Response(
            {"products": ProductPresentationSerializer(queryset, many=True).data}
        )
