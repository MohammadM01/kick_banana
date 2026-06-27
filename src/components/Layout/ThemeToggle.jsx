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
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FaSun className="toggle-icon text-yellow" size={20} />
      ) : (
        <FaMoon className="toggle-icon text-slate" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
