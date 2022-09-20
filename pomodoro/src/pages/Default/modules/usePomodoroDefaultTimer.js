import { useEffect, useState } from "react";

export const usePomodoroDefaultTimer = () => {
  const [defaultTime, setDefaultTime] = useState({
    workTime: 1,
    shortTime: 5,
    longTime: 15,
    sessions:4
  });

  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [currentTime, setCurrentTime] = useState(defaultTime.workTime*60);

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  function StartPomodoro() {
    console.log("click");
    setIsActive(true);
    setCurrentTime(defaultTime.workTime * 60);
    // const timer = setInterval(() => {
    //   setCurrentTime((prevDefaultTime) => prevDefaultTime - 1);
    //   if(minutes === 0 && seconds ===0){
    //     console.log("zerou")
    //     clearInterval(timer);
    //   }
    // }, 1000);

  }

  useEffect(()=>{
    if(currentTime > 0 && isActive){
      console.log("workTimeFinished")
      let countdownTimeOut = setTimeout(()=>{
        setCurrentTime(currentTime -1);
      }, 100)
    } else if(isActive && currentTime === 0){
      console.log('finished')
      setHasFinished(true);
      setIsActive(false);
    }
  }, [currentTime, isActive]);

  return {
    StartPomodoro,
    minutes,
    seconds
  };
};

