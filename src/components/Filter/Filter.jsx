import React from 'react'
import { useDispatch } from 'react-redux';
import { contactsSlice } from 'redux/contacts';
import { Label, Title } from './Filter.styles';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      <Title>Find contacts by name:</Title>
      <input
        type="text"
        onChange={(e) => dispatch(contactsSlice.changeFilter(e.currentTarget.value))}
      />
    </Label>
  );
};

export default (Filter);
