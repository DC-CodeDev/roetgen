import { useState, useEffect } from 'react';

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="9" cy="9" r="3.2" />
      <line x1="9" y1="1.2" x2="9" y2="3" />
      <line x1="9" y1="15" x2="9" y2="16.8" />
      <line x1="1.2" y1="9" x2="3" y2="9" />
      <line x1="15" y1="9" x2="16.8" y2="9" />
      <line x1="3.6" y1="3.6" x2="4.9" y2="4.9" />
      <line x1="13.1" y1="13.1" x2="14.4" y2="14.4" />
      <line x1="3.6" y1="14.4" x2="4.9" y2="13.1" />
      <line x1="13.1" y1="4.9" x2="14.4" y2="3.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M15.2 11.4A6.6 6.6 0 0 1 6.6 2.8a6.6 6.6 0 1 0 8.6 8.6Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved === 'dark' || (!saved && prefersDark) ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text)', display: 'flex', alignItems: 'center', lineHeight: 0 }}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
