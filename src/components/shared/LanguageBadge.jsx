// 📁 src/components/shared/LanguageBadge.jsx
import React from 'react';

const langCodeToFlag = {
  EN: '🇬🇧',
  FR: '🇫🇷',
  ES: '🇪🇸',
  DE: '🇩🇪',
  // Add more as needed
};

export default function LanguageBadge({ source, target }) {
  const flag = (code) => langCodeToFlag[code.toUpperCase()] || code;
  return (
    <span
      className="text-sm font-medium flex gap-1 items-center"
      aria-label={`${source} to ${target}`}
    >
      {flag(source)} <span className="text-xs">⇌</span> {flag(target)}
    </span>
  );
}

// Usage: <LanguageBadge source="EN" target="FR" />

