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
model = load_model('models/Plants.h5')

# Class names (same as before)
class_names = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy',
    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy'
]

def plant_exam(request, plant):
    if request.method == 'POST' and request.FILES.get('plant_image'):
        uploaded_file = request.FILES['plant_image']
        fs = FileSystemStorage()
        filename = fs.save(uploaded_file.name, uploaded_file)
        uploaded_file_url = fs.url(filename)

        # Load image for prediction
        img_path = fs.location + '/' + filename
        img = Image.open(img_path)

        # Resize the image to match model input size (128x128)
        img = img.resize((128, 128))

        # Convert image to numpy array
        img_array = np.array(img)

        # Normalize the image (assuming model expects pixel values between 0 and 1)
        img_array = img_array / 255.0

        # Add batch dimension (as models expect a batch of images, not just one)
        img_array = np.expand_dims(img_array, axis=0)

        # Predict the class of the image
        predictions = model.predict(img_array)
        predicted_class_index = np.argmax(predictions, axis=1)[0]
        predicted_class = class_names[predicted_class_index]
        confidence = np.max(predictions)  # Confidence of the prediction

        # Render the result page
        return render(request, 'detector/result.html', {
            'prediction': predicted_class,
            'confidence': round(confidence * 100, 2),
            'uploaded_file_url': uploaded_file_url
        })

    # Render the page with the plant name
    return render(request, 'detector/examine.html', {'plant': plant})


