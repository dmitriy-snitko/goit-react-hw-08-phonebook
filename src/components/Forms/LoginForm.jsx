import { useState } from "react";
import { Form, Title, SubmitBtn, Input } from "./Form.styles";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { Container } from "App.styles";
import { ToastContainer } from "react-toastify";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
        <SubmitBtn type="submit">Log in</SubmitBtn>
      </Form>
      <ToastContainer />
    </Container>
  )
}