import questionTemplate from "@/data/question.template";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import type { ThemeItem } from "@/components/themeRow";

export interface QuestionTemplateType {
  [key: string]: ThemeItem;
}

const initialState: { questionsJson: QuestionTemplateType } = {
  questionsJson: questionTemplate,
};

export const questionsSlice = createSlice({
  name: "questionsStore",
  initialState,
  reducers: {
    setQuestionsFromString: (state, action: PayloadAction<string>) => {
      state.questionsJson = JSON.parse(action.payload);
    },
  },
});

export const { setQuestionsFromString } = questionsSlice.actions;

export default questionsSlice.reducer;

export const selectQuestionsDict = (state: RootState) =>
  state.questionsStore.questionsJson;
