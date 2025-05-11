// FILE: App.jsx
// PURPOSE: Core shell of Polylogue that switches views based on route

import React from 'react';
import { useLocation } from 'react-router-dom';
import ViewSwitcher from './components/shared/ViewSwitcher';
import HeaderBar from './components/shared/HeaderBar'; // ⬅️ Header bar component

const App = () => {
  const { pathname } = useLocation();

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderBar /> {/* ✅ Insert the top navigation here */}
      <ViewSwitcher path={pathname} />
    </main>
  );
};

export default App;
