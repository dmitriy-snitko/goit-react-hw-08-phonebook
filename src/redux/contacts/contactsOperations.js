import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookApi from 'services/phonebookApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const contacts = await phonebookApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, {rejectWithValue}) => {
    try {
      const data = await phonebookApi.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
    try {
      await phonebookApi.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
