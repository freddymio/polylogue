// VIEW: HomeView
// PURPOSE: Landing page introducing Polylogue and linking main features

import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div className="h-full p-8 flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl font-bold text-orange-600">Welcome to Polylogue</h1>
      <p className="text-muted-foreground max-w-xl">
        A multilingual dictionary experience designed to help you navigate words, meanings, and context — not just translation.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <a href="/vault" className="px-4 py-2 bg-orange-100 rounded hover:bg-orange-200">🔍 Vault</a>
        <a href="/glossary" className="px-4 py-2 bg-orange-100 rounded hover:bg-orange-200">📚 Glossary</a>
        <a href="/context" className="px-4 py-2 bg-orange-100 rounded hover:bg-orange-200">🧠 Context</a>
        <a href="/language" className="px-4 py-2 bg-orange-100 rounded hover:bg-orange-200">🌐 Language Settings</a>
      </div>

      <div className="mt-6 text-xs text-muted-foreground">
        Built with love by Bayo and the Living Spark 🧡
      </div>
    </div>
  );
};

export default HomeView;
