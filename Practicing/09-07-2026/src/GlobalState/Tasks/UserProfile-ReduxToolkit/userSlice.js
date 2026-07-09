import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },

    clearProfile: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

export const { updateProfile, clearProfile } = userSlice.actions;
export default userSlice.reducer;