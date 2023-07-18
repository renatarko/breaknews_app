import styled from "styled-components";

export const Wrapper = styled.form`
  min-width: 35%;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  gap: 1rem;

  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1.5rem;
  position: relative;
  z-index: 500;

  .btn-close {
    cursor: pointer;
    position: absolute;
    margin: 0.5rem;
    right: 0;
    top: 0;
    transition: 0.3s;

    :hover {
      transform: scale(1.1);
    }
  }
`;

export const Title = styled.h1`
  color: #3a3939;
  margin-bottom: 1.5rem;
  border-left: 4px solid #003780;
  padding-left: 0.4rem;
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
