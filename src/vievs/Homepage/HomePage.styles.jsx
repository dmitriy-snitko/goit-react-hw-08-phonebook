import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const GreetingsContainer = styled.div`
  margin: 0 auto;

  font-size: 18px;
  text-align: center;

  @media screen and (min-width: 491px) {
    width: 450px;
  }
`

export const StyledLink = styled(Link)`
  color: #c39022;
  font-weight: 600;
  text-decoration: none;
`