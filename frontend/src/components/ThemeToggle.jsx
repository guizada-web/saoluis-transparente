import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      style={{
        position: 'fixed',
        right: 18,
        top: 18,
        zIndex: 120,
        width: 44,
        height: 44,
        borderRadius: 12,
        background: '#ffffff',
        border: 'none',
        boxShadow: '0 8px 20px rgba(2,6,23,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
    >
      <span style={{ fontSize: 18 }}>{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  );
}
