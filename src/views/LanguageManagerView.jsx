// VIEW: LanguageManagerView
// PURPOSE: Allow user to select source and target languages

import React, { useState } from 'react';
import LanguageSelectorComponent from '../components/shared/LanguageSelectorComponent';
import DirectionSwitcher from '../components/shared/DirectionSwitcher';

const allLanguages = ['EN', 'FR', 'ES', 'DE', 'GR', 'IT', 'PT'];

const LanguageManagerView = () => {
  const [fromLang, setFromLang] = useState('EN');
  const [toLang, setToLang] = useState('FR');

  const handleSwap = () => {
    setFromLang(toLang);
    setToLang(fromLang);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-4">
        <LanguageSelectorComponent
          label="From"
          value={fromLang}
          onChange={setFromLang}
          options={allLanguages}
        />
        <DirectionSwitcher onSwap={handleSwap} />
        <LanguageSelectorComponent
          label="To"
          value={toLang}
          onChange={setToLang}
          options={allLanguages}
        />
      </div>
      <div className="text-sm text-muted-foreground mt-4">
        Selected language pair: <strong>{fromLang} ⇌ {toLang}</strong>
      </div>
    </div>
  );
};

export default LanguageManagerView;
