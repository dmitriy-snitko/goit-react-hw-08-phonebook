import { NavLink } from 'react-router-dom';

export default function SiteNav() {
  return (
    <nav>
      <NavLink exact to="/login" >
        Log in
      </NavLink>
      <NavLink exact to="/register" >
        Sign up
      </NavLink>
    </nav>
  )
}