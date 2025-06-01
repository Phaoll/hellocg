import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  message: string;
  isLoading: boolean;
}

const initialState: GlobalState = {
  message: "Hello from Redux!",
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearMessage: (state) => {
      state.message = "";
    },
  },
});

export const { setMessage, setLoading, clearMessage } = globalSlice.actions;
export default globalSlice.reducer;
