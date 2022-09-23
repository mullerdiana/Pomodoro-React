import { MainCard } from "../../../components/MainCard";
import { Title } from "../../../components/MainTitle";
import { Timer } from "../../../components/Timer";
import { usePomodoroConfigTimer } from "./usePomodoroConfigTimer";

export function PomodoroConfigTimer() {
  const {
    stepPomodoro,
    startPomodoro,
    stopPomodoro,
    continuePomodoro,
    minutes,
    seconds,
  } = usePomodoroConfigTimer();

  return (
    <MainCard>
      <Title />
      <h1>{stepPomodoro}</h1>
      <Timer>
        {minutes}:{seconds}
      </Timer>
      <button onClick={startPomodoro}>Start</button>
      <button onClick={stopPomodoro}>Pausar</button>
      {/* <button onClick={continuePomodoro}>Continuar</button> */}
    </MainCard>
  );
}
