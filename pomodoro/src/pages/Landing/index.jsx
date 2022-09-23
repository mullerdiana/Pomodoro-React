import React from 'react';
import { useLanding } from './useLanding';

export function Landing() {
  const {
    navigate
  } = useLanding();
  return (
    <>
    <h1>Página Teste</h1>
    <button onClick={()=>navigate('/pomodoro')}>Pomodoro Padrão</button>
    <button onClick={()=>navigate('/pomodoroConfig')}>Pomodoro Personalizado</button>
    </>
  );
}