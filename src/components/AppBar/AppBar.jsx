import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import SiteNav from "components/SiteNav/SiteNav";
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from "components/userMenu/userMenu";
import { Nav } from "./AppBar.styles";
import { Container } from "App.styles";

export default function AppBar() {
  const isloggedIn = useSelector(authSelectors.getIsloggedIn);

  return (
    <Nav>
      <Container>
        <AuthNav />
          {isloggedIn ? <UserMenu /> : <SiteNav />}
      </Container>
    </Nav>
  );
};