import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import FiletypeReducer from "../features/Filetype";

export const store = configureStore({
  reducer: {
    user: userReducer,
    FileType: FiletypeReducer,
  },
});
