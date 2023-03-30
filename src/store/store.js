import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import timeReducer from "./slices/timeSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    time: timeReducer,
  },
});
