from django.shortcuts import render
from .models import User, Ingredient, Recipe, DailyMeal
from .serializers import UserSerializer, IngredientSerializer, RecipeSerializer, DailyMealSerializer
from rest_framework import generics

# Create your views here.


class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class IngredientList(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class DailyMealList(generics.ListCreateAPIView):
    queryset = DailyMeal.objects.all()
    serializer_class = DailyMealSerializer


class DailyMealDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DailyMeal.objects.all()
    serializer_class = DailyMealSerializer


# @api_view(["GET"])
# def randJSON(request):
#   obj = {'key':'value'}
#   return HTTPResponse(obj, content_type = 'application/json')
