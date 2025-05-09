// COMPONENT: Card
// PURPOSE: Simple base card structure

import React from 'react';

export const Card = ({ className = '', children, ...props }) => (
  <div className={`rounded-xl border bg-white p-4 shadow ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ className = '', children, ...props }) => (
  <div className={`text-sm text-gray-800 ${className}`} {...props}>
    {children}
  </div>
);
