// APP SHELL: App.jsx
// PURPOSE: Wraps all views, provides global layout and routing structure

import React from 'react';
import ViewSwitcher from './components/shared/ViewSwitcher';

const App = () => {
  return (
    <div className="app-shell">
      {/* SECTION: Current view */}
      <ViewSwitcher />
    </div>
  );
};

export default App;
