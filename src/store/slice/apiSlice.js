import { createSlice } from "@reduxjs/toolkit";
import { fetchApiData } from "../createAsyncThunk";

const initialState = {
  users: [],
  loading: false,
  error: null,
};
const apiSlice = createSlice({
  name: "userAPi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    fetchApiData.pending()
  },
});

export default apiSlice.reducer;
export const {} = apiSlice.actions;
