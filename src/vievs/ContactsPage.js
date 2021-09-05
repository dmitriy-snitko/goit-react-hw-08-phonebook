import ContactForm from 'components/Forms';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Title } from 'App.styles.jsx';
import { Container } from 'App.styles';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
      <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {contacts.length > 0 &&
        <>
          <Filter />

          <Title>Contacts</Title>
          <ContactsList />
        </>
      }
    </Container>
  )
}