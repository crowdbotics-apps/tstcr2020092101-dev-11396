from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PetViewSet

router = DefaultRouter()
router.register("pet", PetViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
