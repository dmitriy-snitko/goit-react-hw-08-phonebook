import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, SubmitBtn, Title, Input } from './Form.styles';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { ToastContainer } from 'react-toastify';
import { warning } from 'utils/Notification';

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
        return warning('Contact already exists');
    };

    dispatch(contactsOperations.addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Title>Name: </Title>
        <Input
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
        <Input
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
      <SubmitBtn type="submit"><span className="material-icons-round">person_add_alt</span>&nbsp;Add</SubmitBtn>
      <ToastContainer />
    </Form>
  )
};

export default ContactForm;
