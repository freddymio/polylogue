// COMPONENT: ContextGallery
// PURPOSE: Displays a filterable list of context cards with search & tone filters

import React, { useState } from 'react';
import ContextGalleryCard from './ContextGalleryCard';
import { useVaultStore } from '../../stores/vaultStore';

const ContextGallery = () => {
  const contextCards = useVaultStore((state) => state.cards);
  const [search, setSearch] = useState('');
  const [toneFilter, setToneFilter] = useState('all');
  const filtered = (contextCards || []).filter((ctx) => {
  const matchesTone = toneFilter === 'all' || ctx.tone === toneFilter;
  const matchesSearch = ctx.label.toLowerCase().includes(search.toLowerCase());
  return matchesTone && matchesSearch;
});

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-wrap gap-2 items-center">
        <input
          type="text"
          placeholder="Search by label..."
          className="border p-2 rounded w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={toneFilter}
          onChange={(e) => setToneFilter(e.target.value)}
        >
          <option value="all">All tones</option>
          <option value="highlight">Highlight</option>
          <option value="critical">Critical</option>
          <option value="positive">Positive</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filtered.map((ctx, index) => (
          <ContextGalleryCard key={index} {...ctx} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-muted-foreground italic mt-8">
          No matching contexts found.
        </div>
      )}
    </div>
  );
};

export default ContextGallery;
