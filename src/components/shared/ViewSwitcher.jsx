// COMPONENT: ViewSwitcher
// PURPOSE: Routes view rendering based on URL path

import React from 'react';
import ContextGallery from './ContextGallery';
import HomeView from '../../views/HomeView';
import VaultView from '../../views/VaultView';
import GlossaryView from '../../views/GlossaryView';
import ContextNavigatorView from '../../views/ContextNavigatorView';
import LanguageManagerView from '../../views/LanguageManagerView';
import NotFoundView from '../../views/NotFoundView';

const ViewSwitcher = () => {
  const path = window.location.pathname;

  switch (path) {
    case '/':
      return <HomeView />;
    case '/vault':
      return <VaultView />;
    case '/glossary':
      return <GlossaryView />;
    case '/context':
      return <ContextNavigatorView />;
    case '/contexts':
      return <ContextGallery />;
    case '/language':
      return <LanguageManagerView />;
    default:
      return <NotFoundView />;
  }
};

export default ViewSwitcher;
