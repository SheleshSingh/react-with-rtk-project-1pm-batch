import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/api.js";

export const fetchApiData = createAsyncThunk(
  "userAPi/fetchApiData",
  async (_, rejectWithValue) => {
    try {
      const res = await api.get("user");
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);

export const userCreate = createAsyncThunk(
  "userApi/userCreate",
  async (details, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.post("user", details);
      dispatch(fetchApiData());
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);
export const userDelete = createAsyncThunk(
  "userApi/userCreate",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.delete(`user/${id}`);
      dispatch(fetchApiData());
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);

export const userEdit = createAsyncThunk(
  "userApi/userEdit",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.put(`user/${id}`);
      dispatch(fetchApiData());
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);
