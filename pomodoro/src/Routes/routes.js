import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Landing } from "../pages/Landing";
import { PomodoroDefaultTimer } from "../pages/Default/modules";
import { PomodoroConfigTimer } from "../pages/Config/modules";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/pomodoro" element={<PomodoroDefaultTimer />}></Route>
        <Route path="/pomodoroConfig" element={<PomodoroConfigTimer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
