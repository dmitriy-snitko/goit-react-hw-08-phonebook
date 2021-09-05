import { Link } from "react-router-dom";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
  const history = useHistory();
  const { isExact } = useRouteMatch();

  useEffect(() => {
    if (!isExact) {
      history.push('/')
    } 
  }, [history, isExact])

  return (
    <p>Welcome to the Phonebook! In this app, you can store and manage your contacts. To get started, you need to <Link to='/register'>create an account</Link> or <Link to='login'>log in</Link> if you already have one.</p>
  );
};