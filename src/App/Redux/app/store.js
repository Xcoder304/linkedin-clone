import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import FiletypeReducer from "../features/Filetype";
import LoadingReducer from "../features/Loading";

export const store = configureStore({
  reducer: {
    user: userReducer,
    FileType: FiletypeReducer,
    Loading: LoadingReducer,
  },
});
