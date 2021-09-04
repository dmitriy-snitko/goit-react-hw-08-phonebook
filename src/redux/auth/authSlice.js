import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "redux/auth";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    [authOperations.getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.getCurrentUser.fulfilled](state, { payload } ) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.getCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;