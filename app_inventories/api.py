from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Product, ProductPresentation, Duty
from .serializers import (
    SaleSerializer,
    RegisterSaleSerializer,
    RegisterDetailSerializer,
    RegisterPaySerializer
)

import json


class RegisterSaleAPI(generics.GenericAPIView):
    serializer_class = RegisterSaleSerializer
    serializer_detail = RegisterDetailSerializer
    serializer_pay = RegisterPaySerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data["sale"])
        serializer.is_valid(raise_exception=True)
        sale = serializer.save()
        # Register details
        total_sale = 0
        for detail in request.data["details"]:
            total = detail["subtotal"]
            for duty in detail["duties1"]:
                query_duty = Duty.objects.get(pk=duty)
                if query_duty.is_percentage:
                    total += detail["subtotal"] * query_duty.value
                else:
                    total += query_duty.value    
            print(total)            
            detail["action"] = sale.id
            detail["total"] = total   
            serializer = self.serializer_detail(data=detail)
            serializer.is_valid(raise_exception=True)
            detail_save = serializer.save()
            print(*detail["duties1"])
            detail_save.duties.add(*detail["duties1"])
            total_sale += total
        sale.total = total_sale
        sale.save()

        # print(total)
        # Register pays
        # for pay in request.data["pays"]:
            # serializer = self.serializer_pay(data=detail)
            # serializer.is_valid(raise_exception=True)
            # detail = serializer.save()
        #     pay["action"] = 54
        #     total += detail["subtotal"]
        #     print(detail)
        # print(total)
        return Response(
            {
                "sale": SaleSerializer(
                    sale, context=self.get_serializer_context()
                ).data
                # "estado": "ok"
            }
        )


