// FILE: App.jsx
// PURPOSE: Core shell of Polylogue that switches views based on route

import React from 'react';
import { useLocation } from 'react-router-dom';
import ViewSwitcher from './components/shared/ViewSwitcher';

const App = () => {
  const { pathname } = useLocation(); // ✅ This triggers rerenders on path change

  return (
    <main className="min-h-screen flex flex-col">
      <ViewSwitcher path={pathname} />
    </main>
  );
};

export default App;
