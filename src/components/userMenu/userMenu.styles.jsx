import styled from "@emotion/styled";

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  
`

export const Name = styled.p`
  color: var(--white-color);
  margin-right: 20px;
`

export const Button = styled.button`
  display: flex;

  border: 1px solid var(--accent-color);
  border-radius: 3px;
  background-color: transparent;
  color: var(--accent-color);

  transition: all 0.25s ease-out;

  &:hover,
  &:focus {
    background-color: #4a4a4a;
    cursor: pointer;
  }
`