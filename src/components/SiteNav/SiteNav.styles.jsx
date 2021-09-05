import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
`
// export const Nav = styled.nav`
//   width: 110px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

export const SiteNavLink = styled(NavLink)`
  color: var(--white-color);
  text-decoration: none;
  font-weight: 600;
  
  &.active {
    color: var(--accent-color);
  }
`
