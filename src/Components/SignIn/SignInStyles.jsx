import styled from "styled-components";

export const SignInContainer = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2d2e2eb5;
`;

export const FormSign = styled.form`
  width: 20rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
    font-family: "Inter", sans-serif;
  }

  .containerInput {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;

      svg {
        position: absolute;
        right: 0.5rem;
        color: #d31010;
      }
    }
  }

  .containerNewcount {
    display: flex;
    justify-content: center;
    gap: 0.4rem;

    p {
      color: #3a3939;
      font-family: "Inter", sans-serif;
      font-size: 0.9rem;
    }

    button {
      background: none;
      border: none;
      color: rgb(8, 140, 184);
      font-family: "Inter", sans-serif;
      font-size: 0.9rem;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const InputS = styled.input`
  width: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  background: #f1f1f1;
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  font-family: "Inter", sans-serif;

  ::placeholder {
    font-size: 0.8rem;
  }

  :focus {
    border-color: rgb(11, 173, 227);
  }
`;

export const ErrorMessage = styled.p`
  width: 100%;
  margin-left: 0.5rem;
  color: #d31010;
  position: absolute;
  bottom: 7rem;
`;
