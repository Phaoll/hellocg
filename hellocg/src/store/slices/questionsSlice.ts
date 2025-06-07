import questionTemplate from "@/data/question.template";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import type { ThemeItem } from "@/components/themeRow";
import {
  DEFAULT_MAX_DIFFICULTY,
  DEFAULT_MIN_DIFFICULTY,
  DEFAULT_NUMBER_OF_QUESTIONS,
  DEFAULT_NUMBER_OF_THEMES,
} from "@/config";

export interface QuestionTemplateType {
  [key: string]: ThemeItem;
}

interface questionSettingsState {
  questionsJson: QuestionTemplateType;
  numberOfTheme: number;
  numberOfQuestions: number;
  difficultyMin: number;
  difficultyMax: number;
  favouriteThemes: string;
}

const initialState: questionSettingsState = {
  questionsJson: questionTemplate,
  numberOfTheme: DEFAULT_NUMBER_OF_THEMES,
  numberOfQuestions: DEFAULT_NUMBER_OF_QUESTIONS,
  difficultyMin: DEFAULT_MIN_DIFFICULTY,
  difficultyMax: DEFAULT_MAX_DIFFICULTY,
  favouriteThemes: "",
};

export const questionsSlice = createSlice({
  name: "questionsStore",
  initialState,
  reducers: {
    setQuestionsFromString: (state, action: PayloadAction<string>) => {
      state.questionsJson = JSON.parse(action.payload);
    },
    setNumberOfTheme: (state, action: PayloadAction<number>) => {
      state.numberOfTheme = action.payload;
    },
    setNumberOfQuestions: (state, action: PayloadAction<number>) => {
      state.numberOfQuestions = action.payload;
    },
    setDifficultyMin: (state, action: PayloadAction<number>) => {
      state.difficultyMin = action.payload;
    },
    setDifficultyMax: (state, action: PayloadAction<number>) => {
      state.difficultyMax = action.payload;
    },
    setFavouriteThemes: (state, action: PayloadAction<string>) => {
      state.favouriteThemes = action.payload;
    },
  },
});

export const {
  setQuestionsFromString,
  setNumberOfTheme,
  setNumberOfQuestions,
  setDifficultyMin,
  setDifficultyMax,
  setFavouriteThemes,
} = questionsSlice.actions;

export default questionsSlice.reducer;

export const selectQuestionsDict = (state: RootState) =>
  state.questionsStore.questionsJson;
export const selectNumberOfTheme = (state: RootState) =>
  state.questionsStore.numberOfTheme;
export const selectNumberOfQuestions = (state: RootState) =>
  state.questionsStore.numberOfQuestions;
export const selectDifficultyMin = (state: RootState) =>
  state.questionsStore.difficultyMin;
export const selectDifficultyMax = (state: RootState) =>
  state.questionsStore.difficultyMax;
export const selectFavouriteThemes = (state: RootState) =>
  state.questionsStore.favouriteThemes;
