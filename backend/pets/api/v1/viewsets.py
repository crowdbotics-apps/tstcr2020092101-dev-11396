from rest_framework import authentication
from pets.models import Pet
from .serializers import PetSerializer
from rest_framework import viewsets


class PetViewSet(viewsets.ModelViewSet):
    serializer_class = PetSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Pet.objects.all()
