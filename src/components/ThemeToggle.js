import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={toggleStyles}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

// Simple inline styles for the button
const toggleStyles = {
    background: 'transparent',
    border: '1px solid white',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    padding: '5px 10px'
};

export default ThemeToggle;