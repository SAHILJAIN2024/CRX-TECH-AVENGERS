# CRX-TECH-AVENGERS

# Set up
## clone the repository
git clone https://github.com/SAHILJAIN2024/CRX-TECH-AVENGERS
cd crx-platform

## install dependencies

### folder dependencies
npm install

### backend setup
cd crx_backend
npm install

### frontend setup
cd crx_frontend
npm install

## create .env in backend
PORT=5000
MONGO_URI=your_mongo_db_databse
CRX_CONTRACT_ADDRESS=0xb3e497afCaB81fFb7690e3157D03715F0580B391
RPC_URL=your_infura_link
PRIVATE_KEY=your_metamsk_private_key


### ai setup
cd crx_ai
pip install fastapi uvicorn scikit-learn xgboost joblib numpy pydantic

#### retrain the model
python save_model.py

uvicorn main:app --reload

# RUN THE APP

npm i concurrently
npm run dev




