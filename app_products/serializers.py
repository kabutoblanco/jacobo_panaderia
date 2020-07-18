from rest_framework import serializers
from .models import Product, Presentation, ProductPresentation
from django.contrib.auth import authenticate


class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Presentation
        fields = ("id", "name")


class ProductPresentationSerializer(serializers.ModelSerializer):
    presentation = PresentationSerializer()

    class Meta:
        model = ProductPresentation
        fields = ("id", "presentation", "price_sale")


class ProductSerializer(serializers.ModelSerializer):
    presentations = ProductPresentationSerializer(
        many=True, read_only=True, source="productpresentation_set"
    )

    class Meta:
        model = Product
        fields = ("id", "name", "image", "stock", "presentations")


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

    def create(self, validated_data):
        product = Product.objects.create_product(validated_data)
        product.save()
        return product


class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        exclude = ("code",)

    def update(self, instance, validated_data):
        instance.name = validated_data["name"]
        instance.price_buy = validated_data["price_buy"]
        instance.price_sale = validated_data["price_sale"]
        instance.stock = validated_data["stock"]
        instance.category = validated_data["category"]
        instance.save()
        return instance
