import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Function to load compliments from the JSON file
def load_compliments():
    with open("compliments.json", "r", encoding="utf-8") as file:
        return json.load(file)

@app.get("/compliment/{tone}")
def get_compliment(tone: str):
    all_compliments = load_compliments()
    
    # Match the tone (and handle underscores if needed)
    category = all_compliments.get(tone.lower(), all_compliments["soft"])
    
    return {
        "text": random.choice(category),
        "tone": tone
    }