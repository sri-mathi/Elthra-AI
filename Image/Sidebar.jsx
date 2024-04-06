// Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faFileAlt, faComments, faCode, faImage, faFlag } from '@fortawesome/free-solid-svg-icons';
import MiniDictionary from '../MiniDictionary/MiniDictionary';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2><Link to="/" className='sidebar-link-green'>ELTHRA AI{`\u00a0\u00a0`}</Link>
        <FontAwesomeIcon icon={faRobot} className="chatbot-icon" />
      </h2>
      <ul>
        <li>
          <Link to="/DocQA" className='sidebar-link'>
            <FontAwesomeIcon icon={faFileAlt} />
            {`\u00a0\u00a0`}Document Assistant
          </Link>
        </li>
        <li>
          <Link to="/image" className='sidebar-link'>
            <FontAwesomeIcon icon={faImage} />
            {`\u00a0\u00a0`}Image to Text
          </Link>
        </li>
      </ul>
      <MiniDictionary />
      <div className='repot'>
        <ul>
          <li>
          <Link to="/report" className='sidebar-link'>
            <FontAwesomeIcon icon={faFlag} />
            {`\u00a0\u00a0`}Report
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
