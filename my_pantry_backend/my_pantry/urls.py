from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('recipes/', views.RecipeList.as_view(), name='recipe-list'),
    path('recipes/<int:pk>', views.RecipeDetail.as_view(), name='recipe-detail'),
    path('ingredients/', views.IngredientList.as_view(), name='ingredient-list'),
    path('ingredients/<int:pk>', views.IngredientDetail.as_view(),
         name='ingredient-detail'),
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user-detail'),
    path('days/', views.DailyMealList.as_view(), name='daily-meal-list'),
    path('days/<int:pk>', views.DailyMealDetail.as_view(), name='daily-meal-detail')
]
