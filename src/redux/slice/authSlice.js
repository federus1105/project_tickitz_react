import { createSlice } from "@reduxjs/toolkit";
import { editProfile } from "../thunk/updateProfileThunk";

// const storedUser = localStorage.getItem("currentUser");
// const storedToken = localStorage.getItem("token");

const initialState = {
isLoggedIn: false,
  currentUser: null,
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      login: (state, action) => {
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
     logout: (state) => {
      state.currentUser = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    editProfilee: (state, action) => {
      state.currentUser = action.payload
    },
extraReducers: (builder) => {
  builder
    .addCase(editProfile.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(editProfile.fulfilled, (state, action) => {
      state.isLoading = false;
  state.currentUser = action.payload;
    })
    .addCase(editProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Gagal update profile";
    });
},
  },
});

export const { register, login, logout, resetPassword, editProfilee} = authSlice.actions;
export default authSlice.reducer;
