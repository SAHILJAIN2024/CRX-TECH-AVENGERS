from fastapi import FastAPI
from pydantic import BaseModel
from xgboost import XGBRegressor
import numpy as np
import joblib

app = FastAPI()

try:
    model = joblib.load("model.pkl")
    print(f"✅ Model loaded: {type(model)}")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None

class InputFeature(BaseModel):
    area_hectares: float
    duration_years: int
    baseline_emissions: float
    expected_emission_reduction: float
    location: str
    emission_factor: float
    project_type: str

def encode_project_type(project__type:str) -> int:
    mapping = {'methane_capture': 0, 'reforestation': 1, 'electric_mobility': 2, 'biochar_production': 3, 'wetland_restoration': 4, 'carbon_sequestration': 5, 'geothermal_energy': 6, 'green_building': 7, 'sustainable_agriculture': 8, 'wind_energy': 9, 'afforestation': 10, 'solar_power': 11 }
    return mapping.get(project__type.lower(), 0)

@app.post("/predict")
def predict(data: InputFeature):
    
        if model is None:
            return {"error": "Model not loaded. Check model.pkl file."}

        # Construct feature array
        features = np.array([[ 
            data.area_hectares,
            data.duration_years,
            data.baseline_emissions,
            data.expected_emission_reduction,
            data.emission_factor,
            encode_project_type(data.project_type)
        ]])

        # Make prediction
        prediction = model.predict(features)

        return {"predicted_carbon_credits": float(prediction[0])}

    