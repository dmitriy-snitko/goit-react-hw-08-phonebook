import React from 'react';
import { List, Item, DelButton, Name, Number } from './ContactsList.styles';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts/';
import Spiner from 'components/Spineer/Spineer';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getFiltredContacts);
    const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <List>
      {contacts.map(cont => {
        return (
          <Item key={cont.id}>
            <p>
              <Name>{`${cont.name}: `}</Name>
              <Number>{`${cont.number}`}</Number>
            </p>
            <DelButton onClick={() => {
              dispatch(contactsOperations.deleteContact(cont.id));
            }
            }>
              <span className="material-icons-round">delete_forever</span>
              <Spiner />
            </DelButton>
          </Item>
        )
      })}
    </List>
  );
};

export default ContactsList;
