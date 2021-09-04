import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";

export default function PublicRoute({
  children,
  restricted = false,
  ...props
}) {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...props}>
      {shouldRedirect ? <Redirect to='/contacts' /> : children}
    </Route>
  );
};