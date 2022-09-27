import { useEffect, useState, useRef } from "react";

export const usePomodoroDefaultTimer = () => {
  const [defaultTime, setDefaultTime] = useState(
    { workTime: 1,
    shortTime: 0.5,
    longTime: 1.5 }
  );
  const [sessions, setSessions] = useState(2);
  const [isCounting, setIsCounting] = useState(false);
  const interval = useRef();
  const [status, setStatus] = useState('Start');
  const [stepPomodoro, setStepPomodoro] = useState("work");

  var heading = ["Etapas", "Tempo"];
  var body = [
    ['Trabalho', defaultTime.workTime]
  ];

  const [isContinue, setIsContinue] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [currentTime, setCurrentTime] = useState(defaultTime.workTime * 60);

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  function startPomodoro() {
    console.log(defaultTime);
    workPomodoro();
    console.log('body', body);
  }

  function workPomodoro() {
    console.log("workPomodoro()");
    setIsCounting(true);
    setCurrentTime(defaultTime.workTime * 60);
    setStepPomodoro("work");
  }

  function breakPomodoro() {
    console.log("intervalo");
    console.log(sessions);
    if (sessions > 1) {
      setCurrentTime(defaultTime.shortTime * 60);
      setStepPomodoro("shortBreak");
      setSessions(sessions - 1);
      console.log("sessions", sessions);
      let shortBreakArray = ['Pausa Curta', defaultTime.shortTime]
      body.push(shortBreakArray);
      console.log('body do break', body);
    } else {
      setCurrentTime(defaultTime.longTime * 60);
      setStepPomodoro("longBreak");
      setHasFinished(true);
      let longBreakArray = ['Pausa Curta', defaultTime.longTime]
      body.push(longBreakArray);
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
        let workArray = ['Trabalho', defaultTime.workTime]
        body.push(workArray);
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
  }, [currentTime, isCounting, body]);

  return {
    stepPomodoro,
    startPomodoro,
    stopPomodoro,
    status,
    minutes,
    seconds,
    heading, 
    body
  };
};
