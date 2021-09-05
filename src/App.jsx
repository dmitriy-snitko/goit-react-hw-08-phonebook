import { Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations, authSelectors } from 'redux/auth';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from './components/PrivatRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(() =>
  import('./vievs/HomePage.js' /* webpackChunkName: "home-page" */),
);
const LoginPage = lazy(() =>
  import('./vievs/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./vievs/RegisterPage' /* webpackChunkName: "register-page" */),
);
const ContactsPage = lazy(() =>
  import('./vievs/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <AppBar />

        <Suspense fallback = {null} >
          <Switch>
            <PublicRoute exact path="/" restricted>
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginPage />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterPage />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsPage />
            </PrivateRoute>

            <PublicRoute restricted>
              <HomePage />
            </PublicRoute>
          </Switch>
        </Suspense>
      </>
    )
  );
};

export default App;
