import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, SubmitBtn, Title } from './Form.styles';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default: return;
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const isAlreadyinContacts = contacts.find(el => el.name.toLowerCase() === normalizedName);

      if (isAlreadyinContacts) {
        alert(`${name} is already in contacts!`);
        return;
    };

    dispatch(contactsOperations.addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Title>Name: </Title>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="off"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        <Title>Number: </Title>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          autoComplete="off"
          onChange={handleChange}
          required
        />
      </label>
      <SubmitBtn type="submit">Add Contact</SubmitBtn>
    </Form>
  )
};

export default ContactForm;
