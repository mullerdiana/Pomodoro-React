import { useEffect, useState, useRef } from "react";

export const usePomodoroConfigTimer = () => {
  const [configTime, setConfigTime] = useState({
    workTime: 0,
    shortTime: 0,
    longTime: 0,
    sessions: 0,
  });

  const [sessions, setSessions] = useState(2);
  const [isCounting, setIsCounting] = useState(false);
  const interval = useRef();
  const [status, setStatus] = useState('Start');

  const [stepPomodoro, setStepPomodoro] = useState("work");
  

  const [isContinue, setIsContinue] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [currentTime, setCurrentTime] = useState(configTime.workTime * 60);

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    setConfigTime((prevState) => {
      return { ...prevState, [event.target.name]: Number(value) };
    });
    console.log('inputChangeHandler', configTime);
  };

  function startPomodoro() {
    console.log("startPomodoro()");
    workPomodoro();
  }

  function workPomodoro() {
    console.log("workPomodoro()");
    setIsCounting(true);
    setCurrentTime(configTime.workTime * 60);
    setStepPomodoro("work");
  }

  function breakPomodoro() {
    console.log("intervalo");
    console.log(sessions);
    if (sessions > 1) {
      setCurrentTime(configTime.shortTime * 60);
      setStepPomodoro("shortBreak");
      setSessions(sessions - 1);
      console.log("sessions", sessions);
    } else {
      setCurrentTime(configTime.longTime * 60);
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
    console.log("currentTime", currentTime);
    console.log("interval.current", interval.current);
    setStatus('Reset');
    console.log('status', status);
  }

  // function continuePomodoro() {
  //   console.log("continuar");
  //   console.log('currentTime', currentTime);
  //   console.log('interval.current', interval.current);
  //   setIsContinue(true);
  //   setCurrentTime(currentTime);
  // }

  useEffect(() => {
    console.log(configTime);
  },[configTime]);

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
      } else if (currentTime === 0 && stepPomodoro === "shortBreak") {
        workPomodoro();
      } else if (currentTime === 0 && stepPomodoro === "longBreak") {
        endPomodoro();
      }
    }
  }, [currentTime, isCounting, status]);

  return {
    configTime,
    stepPomodoro,
    status,
    startPomodoro,
    stopPomodoro,
    minutes,
    seconds,
    inputChangeHandler,
  };
};
