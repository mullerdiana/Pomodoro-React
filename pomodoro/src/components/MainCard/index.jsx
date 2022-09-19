import React from 'react';

import { TimerContainer } from './styles';

export function MainCard({children}) {
  return (
    <TimerContainer>
       {children}
    </TimerContainer>
  );
}