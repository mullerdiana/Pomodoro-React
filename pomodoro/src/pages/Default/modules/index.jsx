import { MainCard } from '../../../components/MainCard';
import { Timer } from '../../../components/Timer';
import { usePomodoroDefaultTimer } from './usePomodoroDefaultTimer';
import { Table } from '../../../components/Table';

export function PomodoroDefaultTimer() {
    const {
        stepPomodoro,
        startPomodoro,
        stopPomodoro,
        status,
        continuePomodoro,
        minutes,
        seconds,
        heading, 
        body
    } = usePomodoroDefaultTimer();

   return(
    <>
    <MainCard>  
        <h1>{stepPomodoro}</h1>   
        <Timer>{minutes}:{seconds}</Timer> 
        <button onClick={startPomodoro}>{status}</button>
        <button onClick={stopPomodoro}>Pausar</button>
        {/* <button onClick={continuePomodoro}>Continuar</button> */}
    </MainCard>
    <Table heading={heading} body={body}/>
    </>
   )
   
  
}