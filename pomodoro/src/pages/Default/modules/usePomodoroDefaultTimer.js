import { useEffect, useState } from "react";

export const usePomodoroDefaultTimer = () => {
  const [defaultTime, setDefaultTime] = useState([
    {workTime: 1, message:'Foque'},
    {shortTime: 0.5, message: 'Descanse'},
    {longTime: 15, message: 'Descanse'}
  ]);
  const [sessions, setSessions] = useState(4);
  const [isCounting, setIsCounting] = useState(false)

  const [stepPomodoro, setStepPomodoro] = useState({
    work: false,
    break: false,
  });
 
  // const [isPaused, setIsPaused] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [currentTime, setCurrentTime] = useState(defaultTime[0].workTime * 60);

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  function startPomodoro() {
    console.log("start");
    workPomodoro();
  }
  
  function workPomodoro() {
    console.log("workPomodoro");
    setIsCounting(true);
    setStepPomodoro({...stepPomodoro, work:true, break: false})
  }
  
  function endPomodoro() {
    console.log("endPomodoro");
    setIsCounting(false);
    setStepPomodoro({...stepPomodoro, work:false, break: false})
    setHasFinished(true);
  }

  function breakPomodoro() {
    console.log("intervalo");
    console.log(sessions);
    setStepPomodoro({...stepPomodoro, work:false, break: true})
    if(sessions>1) {
      setCurrentTime(defaultTime[1].shortTime * 60);
      setSessions(sessions-1); 
      console.log("sessions",sessions);
    } else {
      setCurrentTime(defaultTime[1].longTime * 60); 
    }
  }

  useEffect(()=>{
    if(stepPomodoro === 'work'){
    if(currentTime > 0 && isCounting){ 
      let interval = setInterval(() => {
      isCounting && setCurrentTime((currentTime) => (currentTime >=1 ? currentTime -1 : 0))
    }, 100);

    return () => {
      clearInterval(interval)
    }
    } 
    
    else if(isCounting && currentTime === 0){
      breakPomodoro();
      // else if(isCounting && currentTime === 0){
    }



    } else if ((stepPomodoro === "break")){
      if(isCounting){
        workPomodoro()
      }
    }

  }, [currentTime, isCounting]);

  return {
    startPomodoro,
    minutes,
    seconds
  };
};

