import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: { h: 0, m: 0, s: 0, ms: 0 },
  tasks: [],
  isGoing: 0,
  lastTime: 0,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setTime(state, action) {
      state.time = action.payload.time;
    },
    setTasks(state, action) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action) {
      state.tasks = action.payload;
    },
    setIsGoing(state, action) {
      state.isGoing = action.payload.isGoing;
    },
    setLastTime(state, action) {
      state.lastTime = action.payload.lastTime;
    },
  },
});

export const { setTime, setIsGoing, setLastTime, setTasks, removeTask } =
  timeSlice.actions;
export default timeSlice.reducer;
