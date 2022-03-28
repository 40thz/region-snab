import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    //[vacancyApi.reducerPath]: vacancyApi.reducer,
  },
  devTools: true,
});
