import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { APP_THEME_LIST } from "@/config";

export const APP_THEME_NAMES = APP_THEME_LIST.map(
  (theme) => theme.indexCSSName
);

export type AppThemeName = (typeof APP_THEME_NAMES)[number];

interface settingsState {
  appTheme: AppThemeName;
  playerNumber: number;
  useTimer: boolean;
  timerMaxTime: number;
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
  playerNumber: 4,
  useTimer: false,
  timerMaxTime: 20000, // 20 seconds
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
    setPlayerNumber: (state, action: PayloadAction<number>) => {
      state.playerNumber = action.payload;
    },
    setUseTimer: (state, action: PayloadAction<boolean>) => {
      state.useTimer = action.payload;
    },
    setTimerMaxTime: (state, action: PayloadAction<number>) => {
      state.timerMaxTime = action.payload;
    },
  },
});

export const { setAppTheme, setPlayerNumber, setUseTimer, setTimerMaxTime } =
  settingsSlice.actions;

export default settingsSlice.reducer;

export const selectTheme = (state: RootState) => state.settingsStore.appTheme;
export const selectPlayerNumber = (state: RootState) =>
  state.settingsStore.playerNumber;
export const selectUseTimer = (state: RootState) =>
  state.settingsStore.useTimer;
export const selectTimerMaxTime = (state: RootState) =>
  state.settingsStore.timerMaxTime;
