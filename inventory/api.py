from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer, RegisterSerializer, UpdateSerializer


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save()
        return Response({
            "product":
            ProductSerializer(product, context=self.get_serializer_context()).data
        })

class UpdateAPI(generics.GenericAPIView):
    serializer_class = UpdateSerializer

    def post(self, request, *args, **kwargs):
        product = Product.objects.get(code=request.data['code'])
        serializer = self.get_serializer(instance=product, data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save()
        return Response({
            "product":
            ProductSerializer(product, context=self.get_serializer_context()).data
        })

class ListAPI(generics.RetrieveAPIView):
    serializer_class = UpdateSerializer

    def get(self, request, *args, **kwargs):
        queryset = Product.objects.all()
        return Response({
            "products": ProductSerializer(queryset, many=True).data
        })