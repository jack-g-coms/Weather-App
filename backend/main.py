from flask import Flask
from flask_cors import CORS
from waitress import serve
import requests
import dotenv
import os

dotenv.load_dotenv()

APP = Flask(__name__)
API_BASE = f"http://api.weatherapi.com/v1"
KEY_BASE = f"?key={os.getenv("API_KEY")}"
ALLOWED_ORIGINS = [
    "http://localhost:3000"
]
CORS(APP, origins=ALLOWED_ORIGINS)

@APP.route("/api/v1/<zipcode>/forecast")
def forecast(zipcode):
    url = f"{API_BASE}/forecast.json{KEY_BASE}&q={zipcode}&days=5"
    response = requests.get(url)

    if response.status_code == 200:
        return response.json(), 200
    else:
        raise Exception(f"Forecast request failed with status code: {response.status_code}")

if __name__ == "__main__":
    APP.run(port=os.getenv("PORT"))