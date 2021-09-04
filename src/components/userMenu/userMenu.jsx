import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch()
  return (
    <div>
      <p>{name}</p>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >log out</button>
    </div>
  );
};