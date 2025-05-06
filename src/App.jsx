// APP SHELL: App.jsx
// PURPOSE: Wraps all views, provides global layout and routing structure

import React from 'react';
import HomeView from './views/HomeView';

const App = () => {
  return (
    <div className="app-shell">
      {/* SECTION: Current view */}
      <HomeView />
    </div>
  );
};

export default App;