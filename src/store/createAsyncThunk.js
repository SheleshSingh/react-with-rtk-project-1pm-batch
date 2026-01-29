import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/api.js";
export const fetchApiData = createAsyncThunk(
  "userAPi/fetchApiData",
  async () => {
    const res = await api.get("user");
    return res?.data;
  },
);
