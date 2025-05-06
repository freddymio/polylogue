// COMPONENT: LanguageSelectorComponent
// PURPOSE: Allows user to select source and target languages from dropdowns

import React from 'react';

const LanguageSelectorComponent = ({ fromLang, toLang, onChange }) => {
  return (
    <div>
      <label>From:</label>
      <select value={fromLang} onChange={(e) => onChange('from', e.target.value)}>
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 French</option>
        <option value="es">🇪🇸 Spanish</option>
      </select>

      <label>To:</label>
      <select value={toLang} onChange={(e) => onChange('to', e.target.value)}>
        <option value="fr">🇫🇷 French</option>
        <option value="en">🇬🇧 English</option>
        <option value="es">🇪🇸 Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelectorComponent;