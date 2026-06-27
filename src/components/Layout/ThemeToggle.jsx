import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
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
        <Sun className="toggle-icon text-yellow" size={20} />
      ) : (
        <Moon className="toggle-icon text-slate" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
