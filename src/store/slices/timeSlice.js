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
    setIsGoing(state, action) {
      state.isGoing = action.payload.isGoing;
    },
    setLastTime(state, action) {
      state.lastTime = action.payload.lastTime;
    },
    setTasks(state, action) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    fetchTasks(state, action) {
      state.tasks = action.payload;
    },
    clearOnSubmit(state) {
      state.tasks = [];
      state.time = { h: 0, m: 0, s: 0, ms: 0 };
      state.isGoing = 0;
    },
  },
});

export const {
  setTime,
  setIsGoing,
  setLastTime,
  setTasks,
  removeTask,
  fetchTasks,
  clearOnSubmit,
} = timeSlice.actions;
export default timeSlice.reducer;
