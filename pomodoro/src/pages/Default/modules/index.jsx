import { MainCard } from '../../../components/MainCard';
import { Timer } from '../../../components/Timer';
import { usePomodoroDefaultTimer } from './usePomodoroDefaultTimer';

export function PomodoroDefaultTimer() {
    const {
        stepPomodoro,
        startPomodoro,
        stopPomodoro,
        continuePomodoro,
        minutes,
        seconds
    } = usePomodoroDefaultTimer();

   return(
    <MainCard>  
        <h1>{stepPomodoro}</h1>   
        <Timer>{minutes}:{seconds}</Timer> 
        <button onClick={startPomodoro}>Start</button>
        <button onClick={stopPomodoro}>Pausar</button>
        {/* <button onClick={continuePomodoro}>Continuar</button> */}
    </MainCard>
   )
   
  
}