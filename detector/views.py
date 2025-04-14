from django.core.files.storage import FileSystemStorage
from tensorflow.keras.preprocessing import image
import numpy as np
from .models import Plant 
from tensorflow.keras.models import load_model
from PIL import Image
from django.core.files.storage import default_storage
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

import os
print("Current working directory:", os.getcwd())

def home(request):
    return render(request, 'detector/home.html')

    
def plant_selection(request):
    return render(request, 'plant_selection.html')


#@login_required
def homepage2(request):
    return render(request, 'detector/homepage2.html')

def plant_exam(request):
    plant = request.GET.get('plant', None)
    if plant:
        # Do something with the plant selection (like processing the model for the plant)
        return render(request, 'detector/plant_exam_result.html', {'plant': plant})
    return redirect('homepage2')  # Redirect back to homepage2 if no plant selected


# Load your pre-trained model
model = load_model('backend/trained_model.h5')

# Class names (same as before)
class_names = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy',
    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy'
]

from django.core.files.storage import FileSystemStorage
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
from django.shortcuts import render, redirect
from .models import Plant  # If you're using Plant model, otherwise you can remove this line

# Load your pre-trained model once, outside of the function to avoid loading it multiple times
model = load_model('backend/trained_model.h5')

# Class names (same as before)
class_names = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy',
    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy'
]

def plant_exam(request):
    plant = request.GET.get('plant', None)
    
    if plant:
        if request.method == 'POST' and request.FILES.get('plant_image'):
            uploaded_file = request.FILES['plant_image']
            fs = FileSystemStorage()
            filename = fs.save(uploaded_file.name, uploaded_file)
            uploaded_file_url = fs.url(filename)

            # Load image for prediction
            img_path = fs.path(filename)  # Use .path() for compatibility across OS
            img = Image.open(img_path).convert('RGB')  # Ensure 3-channel RGB
            img = img.resize((128, 128))
            img_array = np.array(img) / 255.0  # Normalize to [0,1]
            img_array = np.expand_dims(img_array, axis=0)  # Shape: (1, 128, 128, 3)

            # Predict
            predictions = model.predict(img_array)
            predicted_class_index = np.argmax(predictions, axis=1)[0]
            predicted_class = class_names[predicted_class_index]
            confidence = np.max(predictions)

            return render(request, 'detector/results.html', {
                'prediction': predicted_class,
                'confidence': round(confidence * 100, 2),
                'uploaded_file_url': uploaded_file_url
            })

        return render(request, 'detector/plant_exam_result.html', {'plant': plant})

    return redirect('homepage2')