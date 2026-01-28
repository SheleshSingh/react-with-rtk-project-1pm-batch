import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slice/apiSlice.js";
const store = configureStore({
  reducer: {
    user: apiSlice,
  },
});

export default store;
