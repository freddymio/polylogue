// VIEW: VaultView
// PURPOSE: Display a list of preview cards representing vocabulary entries

import React from 'react';
import VaultPreviewCard from '@/components/views/VaultPreviewCard';

const mockEntries = [
  {
    headword: 'esprit',
    gloss: 'mind, spirit',
    tags: ['noun', 'abstract', 'French'],
  },
  {
    headword: 'mundo',
    gloss: 'world',
    tags: ['noun', 'Spanish'],
  },
  {
    headword: 'dialogue',
    gloss: 'conversation between two or more people',
    tags: ['noun', 'English'],
  },
];

const VaultView = () => {
  return (
    <div className="p-4 space-y-4">
      {mockEntries.map((entry, index) => (
        <VaultPreviewCard key={index} entry={entry} />
      ))}
    </div>
  );
};

export default VaultView;
