import React from 'react'
import { useDispatch } from 'react-redux';
import { contactsSlice } from 'redux/contacts';
import { Label, Title, Input } from './Filter.styles';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      <Title>Find contact:</Title>
      <Input
        type="text"
        onChange={(e) => dispatch(contactsSlice.changeFilter(e.currentTarget.value))}
      />
    </Label>
  );
};

export default (Filter);
