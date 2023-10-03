import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      authUser: false,
      name: "",
      password: "",
      Image: "",
    },
  },
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(user.name);
      const passwordValidation = user.password;
      state.user = user;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(user);
        sessionStorage.setItem("authUser", saveState);
      }
      console.log(action.payload);
    },
    logout: (state, action) => {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
