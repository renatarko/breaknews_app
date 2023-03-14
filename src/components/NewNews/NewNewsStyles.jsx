import styled from "styled-components";

export const FormNewNews = styled.form`
  min-width: 15rem;
  max-width: 50%;
  height: 50%;
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

  textarea {
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
  }
`;
