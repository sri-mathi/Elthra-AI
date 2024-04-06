import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

import './App.css';

function App() {
  const [documentFile, setDocumentFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setDocumentFile(file);
  };

  const askQuestion = async () => {
    const formData = new FormData();
    formData.append('file', documentFile);
    formData.append('question', question);

    const response = await fetch('http://localhost:5000/ask', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <div className="app-container">
      <Sidebar/>
      <div className="main-content">
        <div className="head"><h1>Document Question and Answering</h1></div><br></br><br></br><br></br>
        <br></br><br></br>
        <div className="mb-3">
          <input
            type="file"
            accept=".txt, .pdf"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Ask a question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button className="green-button" onClick={askQuestion}>Get Answer</button>
        </div>
        <div className='text'>
          <strong>Answer:</strong> {answer}
        </div>
      </div>
    </div>
  );
}

export default App;
