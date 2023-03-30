import React, { useEffect, useState } from "react";
import Btn from "../UI/Btn";
import styles from "./DoneTasks.module.css";
import DoneTaskItem from "./DoneTaskItem";
import { useDispatch, useSelector } from "react-redux";
import { setTasks, removeTask } from "../../store/slices/timeSlice";

const DoneTasks = () => {
  // const { tasks, setTasks } = useContext(Context);
  const tasks = useSelector((state) => state.time.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: "" });

  useEffect(() => {
    localStorage.setItem("doneTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTaksHandler = () => {
    if (task.title.trim().length == 0) {
      setTask({ title: "" });
      return;
    }

    const newTask = {
      ...task,
      id: Date.now(),
    };

    // setTasks([...tasks, newTask]);
    dispatch(setTasks(newTask));
    setTask({ title: "" });
  };

  const deleteTaskHandler = (id) => {
    // setTasks(tasks.filter((t) => t.id !== id));
    dispatch(removeTask(tasks.filter((t) => t.id !== id)));
  };

  return (
    <div className={styles.tasks}>
      <div>
        <input
          placeholder="Done Tasks..."
          value={task.title}
          onChange={(e) => setTask({ title: e.target.value })}
        />
        <Btn onClick={addTaksHandler}>Add</Btn>
      </div>
      <ul>
        {tasks.map((task) => (
          <DoneTaskItem
            task={task}
            id={task.id}
            key={task.id}
            onDelete={deleteTaskHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default DoneTasks;
