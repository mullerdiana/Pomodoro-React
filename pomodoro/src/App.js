import "./App.css";
import { ContextProvider } from "./context/useContext";
import { Title } from "./components/MainTitle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./Routes/routes";


function App() {
  return (
    // <ContextProvider>
    //   {/* router */}
    // </ContextProvider>
    <>
      <Router />
    </>
  );
}

export default App;
