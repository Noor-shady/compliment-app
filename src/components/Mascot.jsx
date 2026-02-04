import { motion } from "framer-motion";

const Mascot = ({ text, mood }) => {
    const getEmoji = () => {
        if (mood === "thinking") return "🤔";
        if (mood === "happy") return "🌸";
        return "✨";
      };
    
      return (
        <div className="mascot-container" style={{ margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: "80px", cursor: "default" }}
      >
        {getEmoji()}
      </motion.div>