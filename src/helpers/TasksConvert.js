import React from "react";

const TasksConvert = (data, dayItem) => {
  const empty = [];

  try {
    if (data[dayItem.format("YYYY")][dayItem.format("MMMM")]) {
      const day = data[dayItem.format("YYYY")][dayItem.format("MMMM")].find(
        (day) => day.date === dayItem.format("DD.MM.YYYY")
      );

      const tasks = day == undefined ? empty : day.tasks;
      return tasks;
    }
  } catch (error) {
    console.log(error);
  }
  return empty;
};

export default TasksConvert;
