import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Loading: false,
};

export const LoadingSlice = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    setTheLoading: (state, action) => {
      state.Loading = action.payload;
    },
  },
});

export const { setTheLoading } = LoadingSlice.actions;

export const selectLoading = (state) => state.Loading.Loading;

export default LoadingSlice.reducer;
