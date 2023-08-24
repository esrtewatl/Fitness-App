import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import GoalSetting from './components/GoalSetting';
import GoalsList from './components/GoalsList';
import WorkoutTracking from './components/WorkoutTracking';
import ProgressCharts from './components/ProgressCharts';
import DarkModeToggle from './components/DarkModeToggle';
import Timer from './components/Timer';
import Login from './components/Login';
import './App.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser'));

// App.js
const toggleDarkMode = (value) => {
  setDarkMode(value);
  document.body.classList.toggle('dark-mode', value);
};


  const handleLogin = (username) => {
    setLoggedInUser(username);
    localStorage.setItem('loggedInUser', username);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('workouts');
    window.location.reload();
  };

  return (
    <Provider store={store}>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        <Header loggedInUser={loggedInUser} handleLogout={handleLogout} />

        {loggedInUser ? (
          <>
            <div className="welcome-message">
              Welcome, <strong>{loggedInUser}</strong>!
            </div>
            <GoalSetting />
            <GoalsList />
            <Timer />
            <WorkoutTracking />
          </>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </div>
    </Provider>
  );
}

export default App;
