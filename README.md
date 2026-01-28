# Cozy Compliment Generator

A wholesome web application that generates kind compliments to brighten your day. Built with React (frontend) and FastAPI (backend), featuring text-to-speech, pastel-inspired aesthetics, and a favorites collection.

---

## Table of Contents

1. Features
2. Tech Stack
3. Prerequisites
4. Running the App
5. Project Structure

---

## Features

- Custom Tones: Choose between Soft, Cheerful, or Extra Wholesome.
- Animated Mascot: A friendly mascot that reacts to generated compliments.
- Text-to-Speech: Listen to compliments using a gentle voice.
- Favorites List: Save your favorite compliments using Local Storage.
- Cozy UI: Pastel colors, rounded corners, and subtle animations.

---

## Tech Stack

- Frontend: React (Vite), Framer Motion
- Backend: Python FastAPI
- Styling: CSS3 (Variables and Flexbox)

---

## Prerequisites

Before starting, ensure you have the following installed:

- Node.js (v16 or higher)
- Python (v3.9 or higher)

---


## Running the App

You will need two terminal windows.

### Terminal 1: Start the Backend

cd backend  
uvicorn main:app --reload

The API will be available at:  
http://127.0.0.1:8000

### Terminal 2: Start the Frontend

npm run dev

The application will be available at:  
http://localhost:5173

---

## Project Structure

cozy-compliments/
├── backend/
│   ├── main.py
│   ├── compliments.json
│   └── requirements.txt
├── src/
│   ├── components/
│   │   └── Mascot.jsx
│   ├── App.js
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md