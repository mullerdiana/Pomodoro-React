import { useEffect, useState, useRef } from "react";

export const usePomodoroConfigTimer = () => {
  const [configTime, setConfigTime] = useState([
    { workTime: 1, message: "Foque" },
    { shortTime: 0.5, message: "Descanse" },
    { longTime: 1.5, message: "Descanse" },
  ]);
  const [sessions, setSessions] = useState(2);
  const [isCounting, setIsCounting] = useState(false);
  const interval = useRef();

  const [stepPomodoro, setStepPomodoro] = useState("work");

  const [isContinue, setIsContinue] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [currentTime, setCurrentTime] = useState(configTime[0].workTime * 60);

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  function startPomodoro() {
    console.log("startPomodoro()");
    workPomodoro();
  }

  function workPomodoro() {
    console.log("workPomodoro()");
    setIsCounting(true);
    setCurrentTime(configTime[0].workTime * 60);
    setStepPomodoro("work");
  }

  function breakPomodoro() {
    console.log("intervalo");
    console.log(sessions);
    if (sessions > 1) {
      setCurrentTime(configTime[1].shortTime * 60);
      setStepPomodoro("shortBreak");
      setSessions(sessions - 1);
      console.log("sessions", sessions);
    } else {
      setCurrentTime(configTime[2].longTime * 60);
      setStepPomodoro("longBreak");
      setHasFinished(true);
    }
  }

  function endPomodoro() {
    console.log("endPomodoro");
    setIsCounting(false);
    setStepPomodoro("finished");
  }
 
  function stopPomodoro() {
    console.log("pausa");
    clearInterval(interval.current);
    console.log('currentTime', currentTime);
    console.log('interval.current', interval.current);
  }
  
  // function continuePomodoro() {
  //   console.log("continuar");
  //   console.log('currentTime', currentTime);
  //   console.log('interval.current', interval.current);
  //   setIsContinue(true);
  //   setCurrentTime(currentTime);
  // }

  useEffect(() => {
    if (stepPomodoro === "work") {
      console.log("pegou work true");
      if (currentTime > 0 && isCounting) {
       interval.current = setInterval(() => {
          isCounting &&
            setCurrentTime((currentTime) =>
              currentTime >= 1 ? currentTime - 1 : 0
            );
        }, 100);

        return () => {
          clearInterval(interval.current);
        };
      } else if (isCounting && currentTime === 0) {
        breakPomodoro();
      }
    } else if (stepPomodoro !== "work") {
      if (currentTime > 0 && isCounting) {
        interval.current = setInterval(() => {
          isCounting &&
            setCurrentTime((currentTime) =>
              currentTime >= 1 ? currentTime - 1 : 0
            );
        }, 100);

        return () => {
          clearInterval(interval.current);
        };
      } else if (currentTime === 0 && stepPomodoro === 'shortBreak') {
        workPomodoro();
      } else if (currentTime === 0 && stepPomodoro === 'longBreak') {
       endPomodoro();
      }
    } 
  }, [currentTime, isCounting]);

  return {
    stepPomodoro,
    startPomodoro,
    stopPomodoro,
    minutes,
    seconds,
  };
};
