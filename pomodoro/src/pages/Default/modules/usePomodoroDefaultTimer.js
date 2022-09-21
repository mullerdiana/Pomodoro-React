import { useEffect, useState } from "react";

export const usePomodoroDefaultTimer = () => {
  const [defaultTime, setDefaultTime] = useState([
    { workTime: 1, message: "Foque" },
    { shortTime: 0.5, message: "Descanse" },
    { longTime: 15, message: "Descanse" },
  ]);
  const [sessions, setSessions] = useState(3);
  const [isCounting, setIsCounting] = useState(false);

  const [stepPomodoro, setStepPomodoro] = useState("work");

  // const [isPaused, setIsPaused] = useState(false);
  // const [hasFinished, setHasFinished] = useState(false);

  const [currentTime, setCurrentTime] = useState(defaultTime[0].workTime * 60);

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  function startPomodoro() {
    console.log("startPomodoro()");
    workPomodoro();
  }

  function workPomodoro() {
    console.log("workPomodoro()");
    setIsCounting(true);
    setCurrentTime(defaultTime[0].workTime * 60);
    setStepPomodoro("work");
  }

  function breakPomodoro() {
    console.log("intervalo");
    console.log(sessions);
    if (sessions > 1) {
      setCurrentTime(defaultTime[1].shortTime * 60);
      setStepPomodoro("shortBreak");
      setSessions(sessions - 1);
      console.log("sessions", sessions);
    } else {
      setCurrentTime(defaultTime[2].longTime * 60);
      setStepPomodoro("longBreak");
    }
  }

  function endPomodoro() {
    console.log("endPomodoro");
    setIsCounting(false);
    setStepPomodoro("finished");
  }

  useEffect(() => {
    if (stepPomodoro === "work") {
      console.log("pegou work true");
      if (currentTime > 0 && isCounting) {
        let interval = setInterval(() => {
          isCounting &&
            setCurrentTime((currentTime) =>
              currentTime >= 1 ? currentTime - 1 : 0
            );
        }, 100);

        return () => {
          clearInterval(interval);
        };
      } else if (isCounting && currentTime === 0) {
        breakPomodoro();
      }
    }
     else if (stepPomodoro === "shortBreak") {
      if (currentTime > 0 && isCounting) {
        let interval = setInterval(() => {
          isCounting &&
            setCurrentTime((currentTime) =>
              currentTime >= 1 ? currentTime - 1 : 0
            );
        }, 100);

        return () => {
          clearInterval(interval);
        };
      } else if (isCounting && currentTime === 0) {
        workPomodoro();
      }
    }  
    
  }, [currentTime, isCounting]);

  return {
    stepPomodoro,
    startPomodoro,
    minutes,
    seconds,
  };
};
