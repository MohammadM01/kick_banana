import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);

  const handleToggle = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <button
      className={`theme-toggle ${isRotating ? 'rotate' : ''}`}
      onClick={handleToggle}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <FaSun className="toggle-icon-sun" size={18} />
      ) : (
        <FaMoon className="toggle-icon-moon" size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;
