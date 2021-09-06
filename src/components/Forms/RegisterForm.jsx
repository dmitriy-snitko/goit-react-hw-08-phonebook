import { useState } from "react";
import { Form, SubmitBtn, Title, Input } from './Form.styles';
import { Container } from "App.styles";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { ToastContainer } from "react-toastify";

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value} = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;
      
      case "password":
        setPassword(value);
        break;

      default: return;
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
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
          <Title>Email: </Title>
          <Input
            type="email"
            name="email"
            value={email}
            // pattern="/^[a-z0-9._%+-]+@[a-z0-9-]+.+.[A-Z]{2,4}$/i"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <Title>Password: </Title>
          <Input
            type="password"
            name="password"
            value={password}
            // pattern="/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </label>

        <SubmitBtn type="submit">Sign up</SubmitBtn>
      </Form>
      <ToastContainer />
    </Container>
  )
};