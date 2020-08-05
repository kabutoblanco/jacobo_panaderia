from rest_framework import serializers
from .models import Sale, Buy, Detail, Pay
from django.contrib.auth import authenticate


class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = ("id", "invoice", "total", "mode", "date")


class BuySerializer(serializers.ModelSerializer):
    class Meta:
        model = Buy
        fields = ("id", "invoice", "total", "date")


class RegisterSaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = "__all__"

    def create(self, validated_data):
        sale = Sale.objects.create(**validated_data)
        sale.save()
        return sale


class UpdateSaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        exclude = ("code",)

    def update(self, instance, validated_data):
        instance.name = validated_data["name"]
        instance.price_buy = validated_data["price_buy"]
        instance.price_sale = validated_data["price_sale"]
        instance.stock = validated_data["stock"]
        instance.category = validated_data["category"]
        instance.save()
        return instance


class RegisterBuySerializer(serializers.ModelSerializer):
    class Meta:
        model = Buy
        fields = "__all__"

    def create(self, validated_data):
        buy = Buy.objects.create(**validated_data)
        buy.save()
        return buy


class UpdateBuySerializer(serializers.ModelSerializer):
    class Meta:
        model = Buy
        exclude = ("code",)

    def update(self, instance, validated_data):
        instance.name = validated_data["name"]
        instance.price_buy = validated_data["price_buy"]
        instance.price_sale = validated_data["price_sale"]
        instance.stock = validated_data["stock"]
        instance.category = validated_data["category"]
        instance.save()
        return instance


class RegisterDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detail
        fields = "__all__"

    def create(self, validated_data):
        detail = Detail.objects.create_detail(validated_data)
        detail.save()
        return detail


class UpdateDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detail
        exclude = ("code",)

    def update(self, instance, validated_data):
        instance.name = validated_data["name"]
        instance.price_buy = validated_data["price_buy"]
        instance.price_sale = validated_data["price_sale"]
        instance.stock = validated_data["stock"]
        instance.category = validated_data["category"]
        instance.save()
        return instance


class RegisterPaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pay
        fields = "__all__"

    def create(self, validated_data):
        pay = Pay.objects.create_pay(validated_data)
        pay.save()
        return pay


class UpdatePaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pay
        exclude = ("code",)

    def update(self, instance, validated_data):
        instance.name = validated_data["name"]
        instance.price_buy = validated_data["price_buy"]
        instance.price_sale = validated_data["price_sale"]
        instance.stock = validated_data["stock"]
        instance.category = validated_data["category"]
        instance.save()
        return instance