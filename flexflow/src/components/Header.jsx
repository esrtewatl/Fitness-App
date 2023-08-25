import React from 'react';
import { useState } from 'react';
import './header.css';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ loggedInUser, handleLogout }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (value) => {
    setDarkMode(value);
    document.body.classList.toggle('dark-mode', value);
  };
  
  return (
    <header>
      Flew Flow {' '}
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      {loggedInUser && <button className='logoutBtn' onClick={handleLogout}>Logout</button>}
    </header>
  );
};

export default Header;
