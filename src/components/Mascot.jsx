import { motion } from "framer-motion";

const Mascot = ({ text, mood }) => {
    const getEmoji = () => {
        if (mood === "thinking") return "🤔";
        if (mood === "happy") return "🌸";
        return "✨";
      };
    
      return (
        <div className="mascot-container" style={{ margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>