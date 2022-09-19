import React, { createContext, useContext, useReducer } from 'react';

const UseContext = createContext();
const key = 'pomodoro'

const counterReducer = (prevValue, newValue) => {
  localStorage.setItem(key, JSON.stringify(newValue));
  return newValue;
};

function ContextProvider({children}){
    const [counter, setCounter] = useReducer(
        counterReducer,
        JSON.parse(localStorage.getItem(key)) ||
          {
            chave: 'valor'
          });
          
          return (
              <UseContext.Provider value={{counter, setCounter}}>
        {children}
    </UseContext.Provider>
  )
}
  
export {
    UseContext,
    ContextProvider
}

export function useContextProvider(){
    const {counter, setCounter} = useContext(UseContext);

    return {
        counter,
        setCounter
    }
}