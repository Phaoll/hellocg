import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

export const APP_THEME_NAMES = ["helloworld_light", "helloworld_dark"] as const;

export type AppThemeName = (typeof APP_THEME_NAMES)[number];

interface settingsState {
  appTheme: AppThemeName;
}

const getStoredTheme = (): AppThemeName => {
  try {
    const stored = localStorage.getItem("appTheme");
    return (stored as AppThemeName) || "helloworld_light";
  } catch {
    // In case localStorage is not available (SSR, etc.)
    return "helloworld_light";
  }
};

const initialState: settingsState = {
  appTheme: getStoredTheme(),
};

export const settingsSlice = createSlice({
  name: "settingsStore",
  initialState,
  reducers: {
    setAppTheme: (state, action: PayloadAction<AppThemeName>) => {
      state.appTheme = action.payload;
      localStorage.setItem("appTheme", action.payload);

      // Apply theme to DOM immediately
      const root = document.documentElement;
      root.removeAttribute("data-theme");
      if (action.payload !== "helloworld_light") {
        root.setAttribute("data-theme", action.payload);
      }
    },
  },
});

export const { setAppTheme } = settingsSlice.actions;

export default settingsSlice.reducer;

export const selectTheme = (state: RootState) => state.settingsStore.appTheme;
