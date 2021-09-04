import React from 'react';
import { List, Item } from './ContactsList.styles';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts/';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getFiltredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <List>
      {!contacts.length
        ? <p>Contact list is empty for now</p>
        : contacts.map(cont => {
          return (
            <Item key={cont.id}>
              <p>{`${cont.name}: ${cont.number}`}</p>
              <button onClick={() => dispatch(contactsOperations.deleteContact(cont.id))}>Delete</button>
            </Item>
          )
        })
      }
    </List>
  );
};

export default ContactsList;
