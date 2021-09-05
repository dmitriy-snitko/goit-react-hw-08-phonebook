import { useRouteMatch, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Container, TitleH1 } from "App.styles";
import { StyledLink } from "./HomePage.styles";
import { GreetingsContainer } from "./HomePage.styles";

export default function HomePage() {
  const history = useHistory();
  const { isExact } = useRouteMatch();

  useEffect(() => {
    if (!isExact) {
      history.push('/')
    } 
  }, [history, isExact])

  return (
    <Container>
      <GreetingsContainer>
        <TitleH1>Welcome to the Phonebook!</TitleH1>
        <p>In this app, you can store and manage your contacts. To get started, you need to <StyledLink to='/register'>create an account</StyledLink> or <StyledLink to='login'>log in</StyledLink> if you already have one.
        </p>
      </GreetingsContainer>
    </Container>
  );
};