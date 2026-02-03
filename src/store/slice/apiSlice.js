import { createSlice } from "@reduxjs/toolkit";
import { fetchApiData, userCreate, userEdit } from "../createAsyncThunk";

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
      state.error = null;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchApiData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // user create method post
    builder.addCase(userCreate.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userCreate.fulfilled, (state) => {
      state.loading = false;
      // state.users = action.payload;
    });
    builder.addCase(userCreate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // user edit method put

    builder.addCase(userEdit.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userEdit.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(userEdit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default apiSlice.reducer;
export const {} = apiSlice.actions;
