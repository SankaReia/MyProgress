import React, { useState } from "react";

const Context = React.createContext({
  time: {},
  setTime: () => {},
  tasks: [],
  setTasks: () => {},
  isGoing: 0,
  setIsGoing: () => {},
  lastTime: 0,
  setLastTime: () => {},
});
export default Context;

export const ContextProvider = ({ children }) => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("doneTasks")) || []
  );
  const [isGoing, setIsGoing] = useState(0);
  const [lastTime, setLastTime] = useState(
    JSON.parse(localStorage.getItem("lastTime")) || 0
  );

  const value = {
    time,
    setTime,
    tasks,
    setTasks,
    isGoing,
    setIsGoing,
    lastTime,
    setLastTime,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
