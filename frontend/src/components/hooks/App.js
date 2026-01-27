import { useState, useEffect } from 'react';
import './App.css';
import Mascot from './components/Mascot';

function App() {
  const [compliment, setCompliment] = useState("Hello! I'm here to cheer you up.");
  const [tone, setTone] = useState("soft");
  const [favorites, setFavorites] = useState([]);
  const [mascotMood, setMascotMood] = useState("neutral");

  // Load favorites from LocalStorage when the app starts
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cozy_favorites')) || [];
    setFavorites(saved);
  }, []);

  // Function to talk to the Python Backend
  const fetchCompliment = async () => {
    try {
        // Change mascot to "thinking" state
      setMascotMood("thinking");
      
      const response = await fetch(`http://127.0.0.1:8000/compliment/${tone}`);
      const data = await response.json();
      
      setCompliment(data.text);
      // Change mascot to "happy" state
      setMascotMood("happy");
      
      // Auto-speak the compliment
      speak(data.text);
      
    } catch (error) {
      console.error("Oops! Backend might be offline.", error);
      setCompliment("You are wonderful even when the internet is broken!");
      setMascotMood("neutral");
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.2;
    // Gentle speed
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // Save to Favorites Logic
  const addToFavorites = () => {
    if (!favorites.includes(compliment)) {
      const newFavs = [...favorites, compliment];
      setFavorites(newFavs);
      localStorage.setItem('cozy_favorites', JSON.stringify(newFavs));
      alert("Added to your feel-good collection! 💖");
    }
  };

  return (
    <div className="app-container">

<h1>✨ Daily Dose of Kindness ✨</h1>

<Mascot text={compliment} mood={mascotMood} />

      {/* Tone Selectors */}
      <div className="controls">
        <p>Current Vibe: <strong>{tone.replace('_', ' ')}</strong></p>
        <div className="button-group">
          <button onClick={() => setTone("soft")}>☁️ Soft</button>
          <button onClick={() => setTone("cheerful")}>☀️ Cheerful</button>
          <button onClick={() => setTone("extra_wholesome")}>💖 Wholesome</button>
        </div>
      </div>