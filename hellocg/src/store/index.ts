import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./slices/questionsSlice";
import settingsSlice from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    questionsStore: questionsSlice,
    settingsStore: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
