// COMPONENT: ViewSwitcher
// PURPOSE: Temporary in-app navigation between main views for dev testing

import React, { useState } from 'react';

// Import all views
import HomeView from '../../views/HomeView';
import VaultView from '../../views/VaultView';
import GlossaryView from '../../views/GlossaryView';
import LanguageManagerView from '../../views/LanguageManagerView';
import ContextNavigatorView from '../../views/ContextNavigatorView';

const views = {
  home: <HomeView />,
  vault: <VaultView />,
  glossary: <GlossaryView />,
  language: <LanguageManagerView />,
  context: <ContextNavigatorView />
};

const ViewSwitcher = () => {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="view-switcher">
      {/* SECTION: View Selector */}
      <nav>
        <button onClick={() => setCurrentView('home')}>🏠 Home</button>
        <button onClick={() => setCurrentView('vault')}>📦 Vault</button>
        <button onClick={() => setCurrentView('glossary')}>📘 Glossary</button>
        <button onClick={() => setCurrentView('language')}>🌐 Language Manager</button>
        <button onClick={() => setCurrentView('context')}>🧭 Context Navigator</button>
      </nav>

      {/* SECTION: Active View */}
      <div className="view-content" style={{ marginTop: '2rem' }}>
        {views[currentView]}
      </div>
    </div>
  );
};

export default ViewSwitcher;