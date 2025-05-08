// COMPONENT: ContextNavigatorComponent
// PURPOSE: Renders cards showing context navigation (usage, polarity, register, domain...)

import React from 'react';

const contextData = [
  {
    label: 'Register',
    value: 'Formal',
    description: 'Used in official, academic, or diplomatic language.',
    icon: '🏛️',
  },
  {
    label: 'Polarity',
    value: 'Positive',
    description: 'Carries favorable or affirming emotional tone.',
    icon: '💖',
  },
  {
    label: 'Domain',
    value: 'Medicine',
    description: 'Commonly used in healthcare or clinical discussions.',
    icon: '🩺',
  },
  {
    label: 'Context',
    value: 'Job Interview',
    description: 'Often appears in professional evaluation scenarios.',
    icon: '🧑‍💼',
  },
];

const ContextNavigatorComponent = () => {
  return (
    <div className="context-navigator">
      <h3>🧭 Context Snapshot</h3>
      <div className="card-grid">
        {contextData.map((item, index) => (
          <div key={index} className="context-card">
            <div className="icon">{item.icon}</div>
            <div className="content">
              <strong>{item.label}:</strong> {item.value}
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContextNavigatorComponent;