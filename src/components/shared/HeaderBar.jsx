// COMPONENT: HeaderBar.jsx
// PURPOSE: Responsive top navigation with locked borderRadius, consistent spacing, and span-wrapped label control

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderBar = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: '🏠 Home' },
    { to: '/vault', label: '🧑‍💼 Vault' },
    { to: '/contexts', label: '🧩 Context Gallery' },
    { to: '/glossary', label: '📚 Glossary' },
    { to: '/context', label: '🧠 Context' },
    { to: '/languages', label: '🌐 Language Settings' },
  ];

  const baseStyle = {
    color: 'gray',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#f3f4f6',
    outline: 'none',
  };

  const hoverStyle = {
    color: '#4338ca', // indigo-600
    backgroundColor: 'white',
    fontWeight: 'bold',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    fontSize: '0.875rem',
    outline: 'none',
  };

  const spanStyle = {
    padding: '0.25rem 0.75rem',
    display: 'inline-block',
  };

  return (
    <header
      style={{
        background: '#f3f4f6',
        padding: '0.75rem 1rem',
        borderBottom: '1px solid #d1d5db',
        marginBottom: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 20,
      }}
    >
      <nav
        style={{
          maxWidth: '1024px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
        }}
      >
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              borderRadius: '0.75rem',
              ...(location.pathname === to ? hoverStyle : baseStyle),
            }}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, baseStyle);
              Object.assign(e.currentTarget.style, hoverStyle);
            }}
            onMouseLeave={(e) => {
              const isActive = location.pathname === to;
              e.currentTarget.removeAttribute('style');
              e.currentTarget.style.borderRadius = '0.75rem';
              Object.assign(e.currentTarget.style, isActive ? hoverStyle : baseStyle);
            }}
          >
            <span style={spanStyle}>{label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HeaderBar;