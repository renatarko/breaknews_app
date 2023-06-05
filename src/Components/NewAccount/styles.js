import styled from "styled-components";
import { FormSign } from "../SignIn/styles";

export const FormNewAccount = styled(FormSign)`
  min-width: 40%;
  justify-content: space-between;
  gap: 0.8rem;

  input {
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

  .inputRed {
    border-color: red;
  }
`;
