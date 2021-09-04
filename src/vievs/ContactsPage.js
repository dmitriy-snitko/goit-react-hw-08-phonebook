import ContactForm from 'components/Forms';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Title } from 'App.styles.jsx';

export default function ContactsPage() {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />

      <Title>Contacts</Title>
      <ContactsList />
    </>
  )
}