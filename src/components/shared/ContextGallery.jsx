// COMPONENT: ContextGallery
// PURPOSE: Displays a list of contextual tags as gallery cards

import React from 'react';
import ContextGalleryCard from './ContextGalleryCard';

const mockContexts = [
  {
    emoji: '🧠',
    label: 'Philosophy',
    tone: 'highlight',
  },
  {
    emoji: '🩺',
    label: 'Medical',
    tone: 'critical',
  },
  {
    emoji: '📜',
    label: 'Historical',
    tone: 'neutral',
  },
  {
    emoji: '🎭',
    label: 'Literary',
    tone: 'positive',
  },
  {
    emoji: '🌍',
    label: 'Cultural',
    tone: 'highlight',
  },
];

const ContextGallery = () => {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {mockContexts.map((ctx, index) => (
        <ContextGalleryCard key={index} {...ctx} />
      ))}
    </div>
  );
};

export default ContextGallery;
