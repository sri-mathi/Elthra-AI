// Home.jsx
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Image.css';

function Home() {
  return (
    <div className="home-container">
      <div className='side'>
        <Sidebar />
      </div>
      <div className="content-home">
        <h1 className='text1'>Welcome to ELTHRA AI{`\u00a0\u00a0`}
          <FontAwesomeIcon icon={faRobot} className="chatbot-icon" />
        </h1>
        <div className="features">
          <p>Our website is a dynamic platform designed to offer a seamless and interactive experience for users. With a user-friendly interface, our webpages cater to a diverse range of needs. From document question and answering to chat support, code assistance, and image analysis, our pages provide versatile functionalities. The responsive design ensures accessibility across various devices, making it convenient for users to navigate and engage with the content. Explore our website for an innovative blend of technology, information, and user-centric features, making it a valuable destination for a wide audience.</p>
        </div>
        <div className="feature-boxes">
        
<div className="feature-box">
  <h2>Image To Text</h2>
  <ul>
    <li>Content Extraction</li>
    <li>Contextual Understanding</li>
    <li>Language Comprehension</li>
    <li>File Format Compatibility</li>
    <li><Link to='/itot'><button>Click</button></Link></li>
  </ul>
</div>
          
          <div className="feature-box">
            <h2>Chat Support</h2>
            <ul>
    <li>Content Extraction</li>
    <li>Contextual Understanding</li>
    <li>Language Comprehension</li>
    <li>File Format Compatibility</li>
    <li>Accuracy and Precision</li>
  </ul>
          </div>
         
          <div className="feature-box">
            <h2>Code Helper</h2>
            <ul>
    <li>Content Extraction</li>
    <li>Contextual Understanding</li>
    <li>Language Comprehension</li>
    <li>File Format Compatibility</li>
    <li>Accuracy and Precision</li>
  </ul>
          </div>
         
          <div className="feature-box">
            <h2>Image Analyzer</h2>
            <ul>
    <li>Content Extraction</li>
    <li>Contextual Understanding</li>
    <li>Language Comprehension</li>
    <li>File Format Compatibility</li>
    <li>Accuracy and Precision</li>
  </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
