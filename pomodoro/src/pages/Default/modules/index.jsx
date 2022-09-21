import { MainCard } from '../../../components/MainCard';
import { Timer } from '../../../components/Timer';
import { usePomodoroDefaultTimer } from './usePomodoroDefaultTimer';

export function PomodoroDefaultTimer() {
    const {
        startPomodoro,
        minutes,
        seconds
    } = usePomodoroDefaultTimer();

   return(
    <MainCard>     
        <Timer>{minutes}:{seconds}</Timer> 
        <button onClick={startPomodoro}>Start</button>
    </MainCard>
   )
   
  
}