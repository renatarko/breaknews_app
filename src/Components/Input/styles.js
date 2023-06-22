import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 0.4rem;
  margin-bottom: 0.7rem;
  position: relative;

  svg {
    position: absolute;
    left: 0.5rem;
    color: #999;
    width: 1rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  background: transparent;
  padding: 0.6rem 1.8rem;
  border: 1px solid transparent;
  border-radius: 0.4rem;
  text-align: left;

  ::placeholder {
    font-size: 0.8rem;
    margin-left: 1rem;
  }

  :focus {
    border-color: rgb(0, 74, 173);
  }
`;
