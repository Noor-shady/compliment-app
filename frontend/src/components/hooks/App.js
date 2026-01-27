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