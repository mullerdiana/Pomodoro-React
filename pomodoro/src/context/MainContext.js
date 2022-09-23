import React, { useState, useEffect } from "react";

const MainContext = React.createContext({});

const MainContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    localStorage.getItem("@userName") || null
  );

  useEffect(() => {
    if (userName === null) {
      const answer = prompt("Qual seu nome?");
      setUserName(answer);
      localStorage.setItem('@userName', answer)
    } 
  }, [userName]);

  return (
    <MainContext.Provider value={{ userName }}>{children}</MainContext.Provider>
  );
};

export { MainContextProvider, MainContext };
