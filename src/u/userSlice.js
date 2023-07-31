import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
  },
});

export const { setName, setEmail ,setCurrentUser } = userSlice.actions;
export default userSlice.reducer;