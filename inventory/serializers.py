from rest_framework import serializers
from .models import Product
from django.contrib.auth import authenticate


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'price_buy', 'stock')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        product = Product.objects.create_product(validated_data)
        product.save()
        return product


class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ('code', )

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.price_buy = validated_data['price_buy']
        instance.price_sale = validated_data['price_sale']
        instance.presentation = validated_data['presentation']
        instance.stock = validated_data['stock']
        instance.type_product = validated_data['type_product']
        instance.category = validated_data['category']
        instance.save()
        return instance