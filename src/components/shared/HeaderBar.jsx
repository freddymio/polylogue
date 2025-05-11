// COMPONENT: HeaderBar.jsx
// PURPOSE: Responsive navigation bar placed at the top of all views

import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <header className="w-full bg-white shadow-sm p-4 flex flex-wrap justify-center gap-6 text-sm sm:text-base sticky top-0 z-10 border-b border-gray-200 mb-6">
      <Link to="/" className="hover:underline">🏠 Home</Link>
      <Link to="/vault" className="hover:underline">🧑‍💼 Vault</Link>
      <Link to="/contexts" className="hover:underline">🧩 Context Gallery</Link>
      <Link to="/glossary" className="hover:underline">📚 Glossary</Link>
      <Link to="/context" className="hover:underline">🧠 Context</Link>
      <Link to="/languages" className="hover:underline">🌐 Language Settings</Link>
    </header>
  );
};

export default HeaderBar;
