import styled from "@emotion/styled";

export const List = styled.ul`
  width: 450px;
  margin: 0 auto;
  list-style: none;
`
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 30px;
  padding-left: 7px;

  border-bottom: 1px solid #4a4a4a;

  background-color: var(--white-color);

  &:nth-of-type(2n) {
    background-color: #e8e5dd;
  }
`

export const DelButton = styled.button`
  position: relative;
  border-style: none;
  background-color: transparent;
  color: #808080;

  &:hover,
  &:focus {
    color: #4a4a4a;
  }
`

export const Name = styled.span`
  font-weight: 600;
`

export const Number = styled.span`
  color: #4a4a4a;
`

