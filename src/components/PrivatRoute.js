import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PrivateRoute({ children, ...props }) {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to='/login' />}
    </Route>
  )
}