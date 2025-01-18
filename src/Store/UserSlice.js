import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "naveen",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    passWord(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName, passWord } = UserSlice.actions;
export default UserSlice.reducer;
