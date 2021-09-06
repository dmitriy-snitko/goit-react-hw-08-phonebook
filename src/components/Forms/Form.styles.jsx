import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 30px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;

  border: 1px solid #808080;

  background-color: var(--white-color);

  box-shadow: 2px 2px 5px 0px #909090;

  @media screen and (min-width: 491px) {
    width: 450px;
  }
`

export const Input = styled.input`
  width: 100%;
`

export const Title = styled.span`
  display: inline-block;
  margin-bottom: 7px;
`

export const SubmitBtn = styled.button`
  width: 100px;
  height: 30px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px; 
  border: 1px solid var(--black-color);

  font-weight: 600;

  transition: all 0.25s ease-out;

  &:hover,
  &:focus {
    background-color: #c8c6bf;
  }
`
