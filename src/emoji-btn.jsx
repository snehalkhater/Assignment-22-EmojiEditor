import React from "react";
import "./emoji-btn.css";

function EmojiButtons({ emoji, setEmoji }) {
  return (
    <button className="emoji-btn" onClick={() => setEmoji(emoji)}>
      {emoji}
    </button>
  );
}

export default EmojiButtons;
