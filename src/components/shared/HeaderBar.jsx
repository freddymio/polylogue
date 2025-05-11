// COMPONENT: HeaderBar.jsx
// PURPOSE: Responsive navigation bar placed at the top of all views

import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <header className="w-full bg-white shadow-sm p-4 flex flex-wrap justify-center gap-6 text-sm sm:text-base sticky top-0 z-10 border-b border-gray-200 mb-6">
      <Link to="/" className="hover:text-blue-600 transition-colors">🏠 Home</Link>
      <Link to="/vault" className="hover:text-blue-600 transition-colors">🧑‍💼 Vault</Link>
      <Link to="/contexts" className="hover:text-blue-600 transition-colors">🧩 Context Gallery</Link>
      <Link to="/glossary" className="hover:text-blue-600 transition-colors">📚 Glossary</Link>
      <Link to="/context" className="hover:text-blue-600 transition-colors">🧠 Context</Link>
      <Link to="/languages" className="hover:text-blue-600 transition-colors">🌐 Language Settings</Link>
    </header>
  );
};

export default HeaderBar;
