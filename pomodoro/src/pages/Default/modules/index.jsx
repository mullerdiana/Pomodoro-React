import { MainCard } from '../../../components/MainCard';
import { Timer } from '../../../components/Timer';
import { usePomodoroDefaultTimer } from './usePomodoroDefaultTimer';

export function PomodoroDefaultTimer() {
    const {
        StartPomodoro,
        minutes,
        seconds
    } = usePomodoroDefaultTimer();

   return(
    <MainCard>     
        <Timer>{minutes}:{seconds}</Timer> 
        <button onClick={StartPomodoro}>Start</button>
    </MainCard>
   )
   
  
}