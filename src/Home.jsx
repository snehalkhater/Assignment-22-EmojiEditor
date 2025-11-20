import React, { useState } from "react";
import "./home.css";
import EmojiButtons from "./emoji-btn.jsx";
import ColorButtons from "./color-btn.jsx";

function Home() {
  const [emoji, setEmoji] = useState("😊");
  const [size, setSize] = useState(100);
  const [angle, setAngle] = useState(0);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="home-con">
      <div className="emoji-box" style={{ backgroundColor: color }}>
        <span style={{ fontSize: `${size}px`, transform: `rotate(${angle}deg)` }}>
          {emoji}
        </span>
      </div>

      <div className="controls-box">
        <h2>Customize Your Emoji</h2>
        <p>Use the buttons below to customize your emoji</p>


        <div className="control-section">
          <h3>Emoji Picker</h3>
          <div className="emoji-grid">
            <EmojiButtons emoji="🍔" setEmoji={setEmoji} />
            <EmojiButtons emoji="🍕" setEmoji={setEmoji} />
            <EmojiButtons emoji="🌭" setEmoji={setEmoji} />
            <EmojiButtons emoji="🍟" setEmoji={setEmoji} />
            <EmojiButtons emoji="🍿" setEmoji={setEmoji} />
            <EmojiButtons emoji="🍪" setEmoji={setEmoji} />
            <EmojiButtons emoji="🍫" setEmoji={setEmoji} />
            <EmojiButtons emoji="🍰" setEmoji={setEmoji} />
            <EmojiButtons emoji="🍦" setEmoji={setEmoji} />
          </div>
        </div>


        <div className="control-section">
          <h3>Color Picker</h3>
          <div className="color-grid">
            <ColorButtons color="#FF6666" setColor={setColor} />
            <ColorButtons color="#FFB266" setColor={setColor} />
            <ColorButtons color="#FFFF66" setColor={setColor} />
            <ColorButtons color="#66FF66" setColor={setColor} />
            <ColorButtons color="#66FFFF" setColor={setColor} />
            <ColorButtons color="#6699FF" setColor={setColor} />
            <ColorButtons color="#CC66FF" setColor={setColor} />
            <ColorButtons color="#FF66CC" setColor={setColor} />
            <ColorButtons color="#CCCCCC" setColor={setColor} />
            <ColorButtons color="#FF9933" setColor={setColor} />
            <ColorButtons color="#33CC33" setColor={setColor} />
            <ColorButtons color="#3333CC" setColor={setColor} />
            <ColorButtons color="#000000" setColor={setColor} />
            <ColorButtons color="#FFFFFF" setColor={setColor} />

          </div>
        </div>

        <div className="control-section">
          <h3>Size Slider</h3>
          <input
            type="range"
            min="20"
            max="150"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="slider"
          />
        </div>

        <div className="control-section">
          <h3>Rotate Emoji</h3>
          <div className="rotate-btn" onClick={() => setAngle(angle + 45)}>
            Rotate
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
