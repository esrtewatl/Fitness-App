import React, { useState } from 'react';
import './darkmode.css';

const DarkModeToggle = ({ toggleDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    toggleDarkMode(!darkMode); // Call the parent component's toggleDarkMode function
  };

  return (
    <div className={`dm-container ${darkMode ? 'dark-mode' : ''}`}>
      <button className='dmbutton' onClick={handleDarkModeToggle}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;
