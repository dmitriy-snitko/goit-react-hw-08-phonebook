import { AuthLink } from './AuthNav.styles';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function AuthNav() {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  return (
    <nav>
      <AuthLink exact to="/" >
        Phonebook
      </AuthLink>

      {isLoggedIn &&
        <AuthLink exact to="/contacts" >
          Contacts
        </AuthLink>
      }
    </nav>
  )
}