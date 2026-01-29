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
    builder.addCase(fetchApiData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchApiData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default apiSlice.reducer;
export const {} = apiSlice.actions;
