import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
// export const getIsLoading = state => state.contacts.isLoading;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  },
);
