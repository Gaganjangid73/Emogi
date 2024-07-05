import React, { useState, useEffect } from 'react';
import emojiList from './emojiList';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(emojiList);

  useEffect(() => {
    setFilteredEmojis(
      emojiList.filter(emoji =>
        emoji.description.toLowerCase().includes(search.toLowerCase()) ||
        (emoji.tags && emoji.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))) ||
        (emoji.aliases && emoji.aliases.some(alias => alias.toLowerCase().includes(search.toLowerCase())))
      )
    );
  }, [search]);

  return (
    <div className="app-container">
      <h1 className="title">Emoji Search Application</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search for an emoji..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="emoji-grid">
        {filteredEmojis.map((emoji, index) => (
          <div key={index} className="emoji-card">
            <span className="emoji-symbol">{emoji.emoji}</span>
            <span className="emoji-description">{emoji.description}</span>
            
            {/* Add tags and aliases display if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;