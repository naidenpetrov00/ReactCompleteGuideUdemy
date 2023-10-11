import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };

const uiSLice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSLice.actions;
export default uiSLice;
