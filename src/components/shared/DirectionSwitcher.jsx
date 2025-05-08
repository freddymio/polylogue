// COMPONENT: DirectionSwitcher
// PURPOSE: Switches the selected language direction (⇌)

import React from 'react';

const DirectionSwitcher = ({ onSwitch }) => {
  return (
    <button onClick={onSwitch} title="Switch Languages">
      ⇌
    </button>
  );
};

export default DirectionSwitcher;