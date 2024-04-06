import React, { useState } from 'react';
import './MiniDictionary.css';

const MiniDictionary = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fetchDictionaryDefinition = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      if (data.length > 0) {
        setDefinition(data[0].meanings[0].definitions[0].definition);
        setIsExpanded(true); // Expand on fetching definition
      } else {
        setDefinition('Definition not found.');
      }
    } catch (error) {
      console.error('Error fetching dictionary definition:', error);
      setDefinition('Error fetching definition. Please try again.');
    }
  };

  return (
    <div className={`mini-dictionary-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <h3 onClick={toggleExpand}>Mini Dictionary</h3>
      <div className="content">
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={fetchDictionaryDefinition}>Get Definition</button>
        <div>
          <strong>Definition:</strong> {definition}
        </div>
      </div>
    </div>
  );
};

export default MiniDictionary;
