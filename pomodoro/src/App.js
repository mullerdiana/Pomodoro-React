import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './context/useContext';
import { Title } from './components/MainTitle';
import { PomodoroDefaultTimer } from './pages/Default/modules';

function App() {
  return (
    // <ContextProvider>
    //   {/* router */}
    // </ContextProvider>
    <>
    <Title></Title>
    <PomodoroDefaultTimer></PomodoroDefaultTimer>
  
    </>
  );
}

export default App;
