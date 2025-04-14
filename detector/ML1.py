# Importing Libraries
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import cv2

# Loading Model
model = tf.keras.models.load_model('trained_model.keras')
model.summary()

# Visualizing a Single Image from the Test Set
image_path = r"C:\Users\madha\OneDrive\Desktop\PHYTO Guard\test\AppleScab2.JPG"

# Reading Image
img = cv2.imread(image_path)  # By Default BGR
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert BGR image to RGB

# Displaying Image
plt.imshow(img)
plt.title("Test Image")
plt.xticks([])
plt.yticks([])
plt.show()

# Testing Model
# Preprocessing the Image
image = tf.keras.preprocessing.image.load_img(image_path, target_size=(128, 128))

input_arr = tf.keras.preprocessing.image.img_to_array(image)
input_arr = np.array([input_arr])  # Converts single image to a batch

print(input_arr.shape)
prediction = model.predict(input_arr)

# Display Prediction and Shape
print(prediction, prediction.shape)

# Get the index of the highest probability class
result_index = np.argmax(prediction)
print(result_index)

# Class names corresponding to model predictions
class_name = [
    'Apple___Apple_scab',
    'Apple___Black_rot',
    'Apple___Cedar_apple_rust',
    'Apple___healthy',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
    'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight',
    'Corn_(maize)___healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy'
]

# Display Result of Disease Prediction
model_prediction = class_name[result_index]
plt.imshow(img)
plt.title(f"Disease Name: {model_prediction}")
plt.xticks([])
plt.yticks([])
plt.show()

# Output the prediction
print("Predicted disease:", model_prediction)
