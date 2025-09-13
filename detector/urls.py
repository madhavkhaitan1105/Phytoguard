from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('homepage2/', views.homepage2, name='homepage2'),
    
    # Path for the plant selection page
    path('plant-selection/', views.plant_selection, name='plant_selection'),
    
    # Path for the plant exam page, passing 'plant' as a parameter
    path('plant-exam/', views.plant_exam, name='plant_exam'),  # accepts 'plant' via GET parameter
    
    # API endpoint for detection
    path('api/detect/', views.api_detect, name='api_detect'),
]
