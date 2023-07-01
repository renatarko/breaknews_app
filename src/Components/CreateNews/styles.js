import styled from "styled-components";

export const FormNewNews = styled.form`
  min-width: 22rem;
  max-width: 50%;
  min-height: 50%;
  height: 21rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1.5rem;
  position: relative;

  i {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    font-size: 1.7rem;
    color: #3a3939;
    cursor: pointer;
  }

  h1 {
    color: #3a3939;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 7rem;
  max-height: 17rem;
  font-size: 1rem;
  border: none;
  outline: none;
  background: #f1f1f1;
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 1px solid transparent;

  ::placeholder {
    font-size: 0.8rem;
  }

  :focus {
    border-color: rgb(0, 74, 173);
  }
`;
