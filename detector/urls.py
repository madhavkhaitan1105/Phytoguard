from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    # path('register/', views.register_view, name='register'),
    # path('login/', views.login_view, name='login'),
    # path('logout/', views.logout_view, name='logout'),
    path('homepage2/', views.homepage2, name='homepage2'),
    path('examine/<str:plant>/', views.plant_exam, name='plant_exam'),
    ]


