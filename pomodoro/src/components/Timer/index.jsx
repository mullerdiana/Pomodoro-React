import React from 'react';

import { TimerContent } from './styles';

export function Timer({children}) {
  return (
    <TimerContent>
    {children}
    </TimerContent>
  );
}