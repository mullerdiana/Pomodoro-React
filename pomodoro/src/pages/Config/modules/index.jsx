import { Input } from "../../../components/Input";
import { MainCard } from "../../../components/MainCard";
import { Title } from "../../../components/MainTitle";
import { Timer } from "../../../components/Timer";
import { ContainerButtons } from "./style";
import { usePomodoroConfigTimer } from "./usePomodoroConfigTimer";

export function PomodoroConfigTimer() {
  const {
    configTime,
    stepPomodoro,
    status,
    startPomodoro,
    stopPomodoro,
    continuePomodoro,
    minutes,
    seconds,
    inputChangeHandler,
  } = usePomodoroConfigTimer();

  return (
    <>
    <MainCard>
      <Input
        nameLabel={"workTime"}
        label={"Tempo de trabalho"}
        value={configTime.workTime}
        onChange={inputChangeHandler}
      />
      <Input
        nameLabel={"shortTime"}
        label={"Pausa curta"}
        onChange={inputChangeHandler}
      />
      <Input
        nameLabel={"longTime"}
        type="number"
        label={"Pausa longa"}
        onChange={inputChangeHandler}
      />
      <Input
        nameLabel={"sessions"}
        type="number"
        label={"Número de seesões"}
        onChange={inputChangeHandler}
      />
      <h1>{stepPomodoro}</h1>

      <Timer>
        {minutes}:{seconds}
      </Timer>
      <button onClick={startPomodoro}>{status}</button>
      <button onClick={stopPomodoro}>Pausar</button>

      {/* <button onClick={continuePomodoro}>Continuar</button> */}
    </MainCard>
    <>
    </>
    </>
    
  );
}
