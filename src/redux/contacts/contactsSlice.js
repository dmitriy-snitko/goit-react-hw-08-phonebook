import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOperations';

const initialState = {
  items: [],
  filter: '',
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => { state.filter = payload },
  },
  extraReducers: {
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items.push(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;