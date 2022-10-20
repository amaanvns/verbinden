import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    emailFetch: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { emailFetch } = loginSlice.actions;

export default loginSlice.reducer;
