import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import Sidebar from '../Sidebar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './ItoT.css';

const ItoT = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const processImage = () => {
    if (!image) {
      alert('Please upload an image first.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const imageData = event.target.result;

      // Perform OCR using Tesseract.js
      Tesseract.recognize(imageData, 'eng').then(({ data: { text } }) => {
        setExtractedText(text);
      });
    };

    reader.readAsDataURL(image);
  };

  const downloadTextFile = () => {
    if (!extractedText) {
      alert('No text to download.');
      return;
    }

    const blob = new Blob([extractedText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'extracted_text.txt';
    link.click();
  };

  return (
    <div className='itot-container'>
      <div className='side'><Sidebar/></div>
      <div className="ItoT">
        <h1 className='head'>ImageTextExtractor</h1><br></br>
        <input type="file" onChange={handleFileUpload} />
        <button onClick={processImage}>Process Image</button>
        <div>
          <h2>Extracted Text:</h2>
          <p>{extractedText}</p>
          <button className='bt' onClick={downloadTextFile}>
    Download Text <FontAwesomeIcon icon={faDownload} />
  </button>
        </div>
      </div>
    </div>
  );
};

export default ItoT;
