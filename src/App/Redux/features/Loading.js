import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Loading: false,
};

export const LoadingSlice = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    setTheLoadingToFalse: (state, action) => {
      state.Loading = false;
    },
    setTheLoadingToTrue: (state, action) => {
      state.Loading = true;
    },
  },
});

export const { setTheLoadingToFalse, setTheLoadingToTrue } =
  LoadingSlice.actions;

export const selectLoading = (state) => state.Loading.Loading;

export default LoadingSlice.reducer;
