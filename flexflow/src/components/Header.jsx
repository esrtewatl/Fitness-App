import React from 'react';
import './header.css';

const Header = ({ loggedInUser, handleLogout }) => {
  return (
    <header>
      Flew Flow {' '}
      {loggedInUser && <button onClick={handleLogout}>Logout</button>}
    </header>
  );
};

export default Header;
