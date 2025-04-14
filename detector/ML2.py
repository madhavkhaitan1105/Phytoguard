# plant_disease_training.py

## Importing Libraries
import tensorflow as tf
import matplotlib.pyplot as plt 
import pandas as pd
import seaborn as sns 
import json
from sklearn.metrics import classification_report, confusion_matrix


# Training Image Preprocessing 
training_set = tf.keras.utils.image_dataset_from_directory(
    'train',
    labels="inferred",
    label_mode="categorical",
    color_mode="rgb",
    batch_size=32,
    image_size=(128, 128),
    shuffle=True
)

# Validation Set
validation_set = tf.keras.utils.image_dataset_from_directory(
    'valid',
    labels="inferred",
    label_mode="categorical",
    color_mode="rgb",
    batch_size=32,
    image_size=(128, 128),
    shuffle=True
)

## Building Model
from tensorflow.keras.layers import Dense, Conv2D, MaxPool2D, Flatten, Dropout
from tensorflow.keras.models import Sequential

model = Sequential()

# Convolutional and Pooling Layers
model.add(Conv2D(32, kernel_size=3, padding='same', activation='relu', input_shape=(128, 128, 3)))
model.add(Conv2D(32, kernel_size=3, activation='relu'))
model.add(MaxPool2D(pool_size=2, strides=2))

model.add(Conv2D(64, kernel_size=3, padding='same', activation='relu'))
model.add(Conv2D(64, kernel_size=3, activation='relu'))
model.add(MaxPool2D(pool_size=2, strides=2))

model.add(Conv2D(128, kernel_size=3, padding='same', activation='relu'))
model.add(Conv2D(128, kernel_size=3, activation='relu'))
model.add(MaxPool2D(pool_size=2, strides=2))

model.add(Conv2D(256, kernel_size=3, padding='same', activation='relu'))
model.add(Conv2D(256, kernel_size=3, activation='relu'))
model.add(MaxPool2D(pool_size=2, strides=2))

model.add(Conv2D(512, kernel_size=3, padding='same', activation='relu'))
model.add(Conv2D(512, kernel_size=3, activation='relu'))
model.add(MaxPool2D(pool_size=2, strides=2))

model.add(Dropout(0.25))
model.add(Flatten())

# Dense Layers
model.add(Dense(1500, activation='relu'))
model.add(Dropout(0.4))
model.add(Dense(11, activation='softmax'))

# Compile Model
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.0001),
              loss='categorical_crossentropy',
              metrics=['accuracy'])

model.summary()

## Training the Model
training_history = model.fit(
    x=training_set,
    validation_data=validation_set,
    epochs=10
)

## Model Evaluation
train_loss, train_acc = model.evaluate(training_set)
print("Training Loss:", train_loss)
print("Training Accuracy:", train_acc)

val_loss, val_acc = model.evaluate(validation_set)
print("Validation Loss:", val_loss)
print("Validation Accuracy:", val_acc)

## Save the model
model.save("trained_model.keras")

## Save Training History
with open("training_hist.json", "w") as f:
    json.dump(training_history.history, f)

## Accuracy Visualization
epochs = range(1, 11)
plt.plot(epochs, training_history.history['accuracy'], color='red', label='Training Accuracy')
plt.plot(epochs, training_history.history['val_accuracy'], color='blue', label='Validation Accuracy')
plt.xlabel("Epochs")
plt.ylabel("Accuracy")
plt.title("Accuracy Visualization")
plt.legend()
plt.show()

## Model Evaluation - Classification Report & Confusion Matrix
test_set = tf.keras.utils.image_dataset_from_directory(
    'valid',
    labels="inferred",
    label_mode="categorical",
    color_mode="rgb",
    batch_size=32,
    image_size=(128, 128),
    shuffle=False
)

class_name = test_set.class_names
y_pred = model.predict(test_set)
predicted_categories = tf.argmax(y_pred, axis=1)

true_categories = tf.concat([y for x, y in test_set], axis=0)
Y_true = tf.argmax(true_categories, axis=1)

print(classification_report(Y_true, predicted_categories, target_names=class_name))

# Confusion Matrix
cm = confusion_matrix(Y_true, predicted_categories)
plt.figure(figsize=(10, 10))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=class_name, yticklabels=class_name)
plt.xlabel("Predicted Class", fontsize=14)
plt.ylabel("Actual Class", fontsize=14)
plt.title("Confusion Matrix - Plant Disease Classification", fontsize=16)
plt.xticks(rotation=45)
plt.yticks(rotation=0)
plt.tight_layout()
plt.show()
