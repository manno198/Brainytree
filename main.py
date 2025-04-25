
import os
import logging
from typing import List, Optional
import torch
import numpy as np
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import torchvision.transforms as transforms
from PIL import Image
import io

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="BrainyTree API",
    description="API for brain tumor detection from MRI scans using deep learning",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Define preprocessing transformations
preprocess = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.Grayscale(num_output_channels=3),  # Convert to 3 channels if needed
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# Model loading function
def load_models():
    try:
        # Check if models exist
        if not os.path.exists('feature_extractor.pth') or not os.path.exists('lstm_model.pth'):
            logger.warning("Model files not found. Using placeholder models.")
            return None, None
        
        # Load models
        feature_extractor = torch.load('feature_extractor.pth', map_location='cpu')
        lstm_model = torch.load('lstm_model.pth', map_location='cpu')
        
        # Set models to evaluation mode
        feature_extractor.eval()
        lstm_model.eval()
        
        logger.info("Models loaded successfully")
        return feature_extractor, lstm_model
    
    except Exception as e:
        logger.error(f"Error loading models: {str(e)}")
        return None, None

# Initialize models as None (they will be loaded when needed)
feature_extractor, lstm_model = None, None

@app.on_event("startup")
async def startup_event():
    global feature_extractor, lstm_model
    feature_extractor, lstm_model = load_models()

@app.get("/")
async def root():
    return {"message": "Welcome to BrainyTree API for MRI scan analysis"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        logger.info(f"Received file: {file.filename}")
        
        # Validate file type
        if not file.filename.lower().endswith(('.png', '.jpg', '.jpeg', '.dicom', '.dcm')):
            raise HTTPException(status_code=400, detail="Unsupported file format. Please upload a PNG, JPG, or DICOM file.")
        
        # Read image file
        contents = await file.read()
        image = Image.open(io.BytesIO(contents))
        
        # Preprocess the image
        image_tensor = preprocess(image).unsqueeze(0)  # Add batch dimension
        
        # Check if models are loaded
        global feature_extractor, lstm_model
        if feature_extractor is None or lstm_model is None:
            # For demonstration, return mock results if models aren't loaded
            logger.info("Using mock prediction results")
            confidence = np.random.uniform(0.6, 0.95)
            is_tumor = confidence > 0.75
            
            return {
                "filename": file.filename,
                "prediction": "Tumor Detected" if is_tumor else "No Tumor Detected",
                "confidence": float(confidence),
                "note": "This is a mock result as models are not loaded"
            }
        
        # Perform prediction
        with torch.no_grad():
            # Extract features
            features = feature_extractor(image_tensor)
            
            # Use LSTM for classification
            # Assuming LSTM expects features of shape [batch_size, sequence_length, features]
            # We might need to reshape based on the actual model architecture
            features_reshaped = features.view(1, -1, features.shape[1])  # Reshape for LSTM
            
            outputs = lstm_model(features_reshaped)
            
            # Get prediction (assuming binary classification)
            probabilities = torch.nn.functional.softmax(outputs, dim=1)
            confidence, predicted_class = torch.max(probabilities, 1)
            
            prediction_result = "Tumor Detected" if predicted_class.item() == 1 else "No Tumor Detected"
            
            logger.info(f"Prediction: {prediction_result}, Confidence: {confidence.item():.4f}")
            
            # Return the prediction as JSON
            return {
                "filename": file.filename,
                "prediction": prediction_result,
                "confidence": float(confidence.item()),
                "probable_type": "Glioma" if predicted_class.item() == 1 else "N/A",
            }
    
    except Exception as e:
        logger.error(f"Error during prediction: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

@app.get("/model-info")
async def model_info():
    global feature_extractor, lstm_model
    
    feature_extractor_loaded = feature_extractor is not None
    lstm_model_loaded = lstm_model is not None
    
    return {
        "feature_extractor_loaded": feature_extractor_loaded,
        "lstm_model_loaded": lstm_model_loaded,
        "models_status": "ready" if (feature_extractor_loaded and lstm_model_loaded) else "not_loaded",
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
