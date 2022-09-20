import { useEffect, useState } from "react";

export const usePomodoroDefaultTimer = () => {
  const [defaultTime, setDefaultTime] = useState([
    {workTime: 1, message:'Foque'},
    {shortTime: 5, message: 'Descanse'},
    {longTime: 15, message: 'Descanse'}
  ]);
  const [sessions, setSessions] = useState(4);
  const [isCounting, setIsCounting] = useState(false)

  const [stepPomodoro, setStepPomodoro] = useState({
    work: false,
    shortBreak:false,
    longBreak: false,
    end: false
  });
 
  // const [isPaused, setIsPaused] = useState(false);
  // const [hasFinished, setHasFinished] = useState(false);

  const [currentTime, setCurrentTime] = useState(defaultTime[0].workTime * 60);

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  function StartPomodoro() {
    console.log("start");
    WorkPomodoro();
  }
  
  function WorkPomodoro() {
    console.log("workPomodoro");
    setIsCounting(true);
    setStepPomodoro({...stepPomodoro, work:true})
  }


  function BreakPomodoro() {
    console.log("intervalo");
    setCurrentTime(defaultTime[1].shortTime * 60)
    // if(sessions>1 ? setCurrentTime(defaultTime[0].shortTime * 60) : setCurrentTime(defaultTime[0].longTime * 60));
  }

  useEffect(()=>{
    if(currentTime > 0 && isCounting){ 
      let interval = setInterval(() => {
      isCounting && setCurrentTime((currentTime) => (currentTime >=1 ? currentTime -1 : 0))
    }, 100);

    return () => {
      clearInterval(interval)
    }
    }  else if(isCounting && currentTime === 0){
      BreakPomodoro();
    // } 
    // else if(isCounting && currentTime === 0){

    }
  }, [currentTime, isCounting]);

  return {
    StartPomodoro,
    minutes,
    seconds
  };
};

