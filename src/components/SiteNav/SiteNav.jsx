import { SiteNavLink, Nav } from "./SiteNav.styles"

export default function SiteNav() {
  return (
    <Nav>
      <SiteNavLink to="/login" >
        Log in
      </SiteNavLink>
      <SiteNavLink to="/register" >
        Sign up
      </SiteNavLink>
    </Nav>
  )
}