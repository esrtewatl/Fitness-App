import React, { useState } from 'react';
import Header from './Header';
import './login.css';

const Login = ({ handleLogin }) => { // Pass the handleLogin function as a prop
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    if (username.trim() !== '') {
      setLoggedIn(true);
      handleLogin(username); // Call the handleLogin function passed from props
    }
  };

  return (
    <div className="login-page">
     
      <div className="login-container">
        {!loggedIn ? (
          <div className="login-form">
            <h2>Login to Flew Flow Fitness App</h2>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
            <button onClick={handleSubmit}>Login</button> {/* Use handleSubmit here */}
          </div>
        ) : (
          <div className="welcome-message">
            Welcome, <strong>{username}</strong>!
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
