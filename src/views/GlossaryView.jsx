// VIEW: GlossaryView
// PURPOSE: Display the multilingual glossary entries using the GlossaryTableComponent

import React from 'react';
import GlossaryTableComponent from '../components/shared/GlossaryTableComponent';

const mockGlossary = [
  {
    source: 'amour',
    target: 'love',
    pos: 'noun',
    langFrom: 'FR',
    langTo: 'EN',
  },
  {
    source: 'esperanza',
    target: 'hope',
    pos: 'noun',
    langFrom: 'ES',
    langTo: 'EN',
  },
  {
    source: 'connaissance',
    target: 'knowledge',
    pos: 'noun',
    langFrom: 'FR',
    langTo: 'EN',
  },
];

const GlossaryView = () => {
  return (
    <div className="p-4">
      <GlossaryTableComponent entries={mockGlossary} />
    </div>
  );
};

export default GlossaryView;
