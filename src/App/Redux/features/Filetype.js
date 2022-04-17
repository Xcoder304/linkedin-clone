import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FileType: null,
};

export const FileTypeSlice = createSlice({
  name: "FileType",
  initialState,
  reducers: {
    setThefileType: (state, action) => {
      state.FileType = action.payload;
    },
  },
});

export const { setThefileType } = FileTypeSlice.actions;

export const selectFileType = (state) => state.FileType.FileType;

export default FileTypeSlice.reducer;
