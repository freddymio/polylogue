// COMPONENT: ContextGalleryCard
// PURPOSE: Display a single context item visually with emoji, label, and tone badge

import React from 'react';

const ContextGalleryCard = ({ emoji = '📘', label, tone = 'neutral', onClick }) => {
  return (
    <div
      className={`cursor-pointer rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-200 border-l-4 ${
        tone === 'critical'
          ? 'border-red-500'
          : tone === 'positive'
          ? 'border-green-500'
          : tone === 'highlight'
          ? 'border-yellow-400'
          : 'border-gray-300'
      } bg-white dark:bg-gray-800`}
      onClick={onClick}
    >
      <div className="text-3xl mb-2">{emoji}</div>
      <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {label}
      </div>
    </div>
  );
};

export default ContextGalleryCard;
