from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()
# to talk to my FastAPI server (backend).
app.add_middleware(
    CORSMiddleware,
    # In a real app, I'd'd put my React URL here
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# My offical database of kindness
COMPLIMENTS = {
    "soft": [
        "You have such a gentle soul.",
        "Your presence is like a warm cup of tea.",
        "You are doing better than you think you are."
    ],
    "cheerful": [
        "You're a literal ray of sunshine!",
        "The world is brighter because you're in it!",
        "You've got this! High five! ✋"
    ],
    "extra wholesome": [
        "I'm so proud of the person you are becoming.",
        "You deserve all the goodness the world has to offer.",
        "Your kindness makes a ripple effect you can't even see."
    ]
}

@app.get("/")
def home():
    return {"message": "The Cozy Compliment API is running! ✨"}

@app.get("/compliment/{tone}")
def get_compliment(tone: str):