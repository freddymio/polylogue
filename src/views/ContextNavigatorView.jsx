// VIEW: ContextNavigatorView
// PURPOSE: Display contextual usages or meta-notes about entries

import React from 'react';
import ContextNavigatorComponent from '../components/shared/ContextNavigatorComponent';

const mockContexts = [
  {
    context: 'Philosophy',
    note: 'Plato uses “amour” in a transcendent sense, beyond bodily desire.',
    relatedTerms: ['eros', 'agape', 'désir'],
  },
  {
    context: 'Medical',
    note: '“Mundo” appears in psychological contexts as the internal representation of reality.',
    relatedTerms: ['mind', 'perception'],
  },
  {
    context: 'Literary',
    note: 'The term “esperanza” is commonly personified in Spanish poetry.',
    relatedTerms: ['fe', 'vida', 'amor'],
  },
];

const ContextNavigatorView = () => {
  return (
    <div className="p-4">
      <ContextNavigatorComponent data={mockContexts} />
    </div>
  );
};

export default ContextNavigatorView;
