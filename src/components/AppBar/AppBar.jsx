import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import SiteNav from "components/SiteNav/SiteNav";
import Logo from "components/Logo/Logo";
import UserMenu from "components/userMenu/userMenu";
import { Header, StyledAppBar } from "./AppBar.styles";
import { Container } from "App.styles";

export default function AppBar() {
  const isloggedIn = useSelector(authSelectors.getIsloggedIn);

  return (
    <Header>
      <Container>
        <StyledAppBar>
          <Logo />

          {isloggedIn ? <UserMenu /> : <SiteNav />}
        </StyledAppBar>
      </Container>
    </Header>
  );
};