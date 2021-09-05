import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { StyledUserMenu, Name, Button } from "./userMenu.styles";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch()
  return (
    <StyledUserMenu>
      <Name>{name}</Name>
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <span className="material-icons-round">logout</span>
      </Button>
    </StyledUserMenu>
  );
};