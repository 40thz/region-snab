import { configureStore } from "@reduxjs/toolkit";
import { vacancyApi } from "../services/vacancyApi";
import { preloaderReducer } from "./slice/preloader.slice";

export const store = configureStore({
  reducer: {
    [vacancyApi.reducerPath]: vacancyApi.reducer,
    preloader: preloaderReducer,
  },
  devTools: true,
});
