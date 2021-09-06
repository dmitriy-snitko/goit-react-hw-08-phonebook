import { createAsyncThunk } from "@reduxjs/toolkit";
import * as phonebookApi from 'services/phonebookApi';
import { warning } from "utils/Notification";

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await phonebookApi.register(credentials);

      return data;
    } catch (error) {
      warning('account already exists');
      return rejectWithValue();
    };
  },
);

export const logIn = createAsyncThunk(
  'auth/logIn ',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await phonebookApi.logIn(credentials);

      return data;

    } catch (error) {
      warning('incorrect email or password');
      return rejectWithValue();
    };
  },
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const data = await phonebookApi.logOut();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    };
  },
);

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().auth.token;

    if (!persistedToken) return rejectWithValue();

    try {
      const data = await phonebookApi.getCurrentUser(persistedToken);

      return data;
    } catch (error) {
      rejectWithValue(error);
    };
  },
);