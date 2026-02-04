import { useState, useEffect } from 'react';
import './App.css';
import Mascot from './components/Mascot';

function App() {
  const [compliment, setCompliment] = useState("Hello! I'm here to cheer you up.");
  const [tone, setTone] = useState("soft");
  const [favorites, setFavorites] = useState([]);
  const [mascotMood, setMascotMood] = useState("neutral");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cozy_favorites')) || [];
    setFavorites(saved);
  }, []);

  const fetchCompliment = async () => {
    try {
      setMascotMood("thinking");
      const response = await fetch(`http://127.0.0.1:8000/compliment/${tone}`);
      const data = await response.json();
      setCompliment(data.text);
      setMascotMood("happy");
      speak(data.text);
    } catch (error) {
      console.error(error);
      setCompliment("You are wonderful even when the backend is resting!");
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.2;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const addToFavorites = () => {
    if (!favorites.includes(compliment)) {
      const newFavs = [...favorites, compliment];
      setFavorites(newFavs);
      localStorage.setItem('cozy_favorites', JSON.stringify(newFavs));
    }
  };

  return (
    <div className="app-container">
      <h1>✨ Daily Dose of Kindness ✨</h1>
      <Mascot text={compliment} mood={mascotMood} />
      
      <div className="controls">
        <button onClick={() => setTone("soft")}>☁️ Soft</button>
        <button onClick={() => setTone("cheerful")}>☀️ Cheerful</button>
        <button onClick={() => setTone("extra_wholesome")}>💖 Wholesome</button>
      </div>

      <div className="actions">
        <button className="generate-btn" onClick={fetchCompliment}>Generate</button>
        <button className="save-btn" onClick={addToFavorites}>Save</button>
      </div>

      {favorites.length > 0 && (
        <div className="favorites-section">
          <h3>Your Collection</h3>
          {favorites.map((fav, i) => <div key={i} className="fav-item">"{fav}"</div>)}
        </div>
      )}
    </div>
  );
}

export default App;
