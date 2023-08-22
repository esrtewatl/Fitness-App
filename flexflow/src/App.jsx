import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import GoalSetting from './components/GoalSetting';
import GoalsList from './components/GoalsList';
import WorkoutTracking from './components/WorkoutTracking';
import ProgressCharts from './components/ProgressCharts';
import DarkModeToggle from './components/DarkModeToggle'; // Import the DarkModeToggle component
import './App.css';
import Timer from './components/Timer';


function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Apply dark mode styles to the entire app
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <Provider store={store}>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Header />
        <GoalSetting />
        <GoalsList /> 
        <Timer />
        <WorkoutTracking />
        
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      </div>
    </Provider>
  );
}

export default App;
