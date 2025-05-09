// COMPONENT: ContextGallery
// PURPOSE: Displays all saved context cards in a responsive grid

import React from 'react';
import { useVaultStore } from '../../stores/vaultStore';
import VaultPreviewCard from './VaultPreviewCard';

const ContextGallery = () => {
  const contextCards = useVaultStore((state) => state.cards);

  if (!contextCards || contextCards.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 italic">
        No context cards saved yet.
      </div>
    );
  }

  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {contextCards.map((card, index) => (
        <VaultPreviewCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ContextGallery;
