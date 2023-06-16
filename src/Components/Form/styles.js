import styled from "styled-components";

export const Wrapper = styled.form`
  min-width: 25rem;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1.5rem;
  position: relative;

  .btn-close {
    cursor: pointer;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
  }
`;

export const Title = styled.h1`
  color: #3a3939;
  margin-bottom: 1.5rem;
`;

export const ContainerNewAccount = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1rem;

  p {
    color: #3a3939;
    font-size: 0.9rem;
    font-weight: 500;
  }

  button {
    background: none;
    border: none;
    color: rgb(8, 140, 184);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`;
