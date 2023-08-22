import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaClock } from 'react-icons/fa';
import './Timer.css';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10); // Update every 10 milliseconds for milliseconds display
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setElapsedTime(Date.now() - startTime);
    } else {
      setIsRunning(true);
      setStartTime(Date.now() - elapsedTime);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
  };

  return (
    <div className="timer">
      <h3>Timer</h3>
      <div className="timer-display">
        <FaClock className="timer-icon" />
        {formatTime(elapsedTime)}
      </div>
      <div className="timer-controls">
        <button onClick={toggleTimer}>{isRunning ? <FaPause /> : <FaPlay />}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
