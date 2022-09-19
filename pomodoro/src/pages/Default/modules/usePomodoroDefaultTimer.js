import { useState } from "react";

export const usePomodoroDefaultTimer = () => {
  const [defaultTime, setDefaultTime] = useState({
    workTime: 25,
    shortTime: 5,
    longTime: 15,
  });

  const [currentTime, setCurrentTime] = useState(0);

  //   let convertedWorkTime = defaultTime.workTime * 60;

  //   const [remainingTime, setRemainingTime] = useState(convertedWorkTime);
  //   const [WorkTimer, setWorkTimer] = useState({
  //     remainingMinutes: Math.trunc(convertedWorkTime / 60),
  //     remainingSeconds: Math.trunc(convertedWorkTime % 60),
  //   })

  //   const timerHandler =

  //   function StartPomodoro() {
  //     console.log('click');
  //     setRemainingTime = setInterval(() => {
  //         convertedWorkTime--;
  //     },100);
  //   }

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  function StartPomodoro() {
    console.log("click");

    setCurrentTime(defaultTime.workTime * 60);

    const timer = setInterval(() => {
      setCurrentTime((prevDefaultTime) => prevDefaultTime - 1);
    }, 100);
  }

  console.log(defaultTime, defaultTime.workTime);

  return {
    StartPomodoro,
    minutes,
    seconds
    // defaultTime,
    // remainingTime,
    // setRemainingTime,
    // WorkTimer
  };
};

//conversão para para o setInterval atualizar minutos e seg restantes
// workTime *60
// shortTime *60,
// longTime *60
// }

// minutes = valor convertido / 60
// seconds = valor convertido % 60
