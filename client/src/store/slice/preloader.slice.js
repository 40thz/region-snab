import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  animation: false,
};

export const preloaderSlice = createSlice({
  name: "preloader",
  initialState,
  reducers: {
    animateLoader: (state, action) => {
      return {
        ...state,
        animation: true,
      };
    },
    removeLoader: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const preloaderReducer = preloaderSlice.reducer;
export const preloaderActions = preloaderSlice.actions;
