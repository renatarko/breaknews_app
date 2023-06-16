import styled from "styled-components";

export const DeleteNew = styled.form`
  min-width: 15rem;
  max-width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.5rem;

  background-color: #fff;
  border-radius: 0.4rem;
  padding: 1.5rem;
  position: relative;

  .bi-x {
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

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      font-size: 3rem;
      color: red;
    }

    p {
      text-align: center;
      margin-top: 1rem;
    }
  }

  .containerButtons {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;

    button {
      padding: 0.5rem 1.5rem;
      border-radius: 0.3rem;
      cursor: pointer;
      font-weight: 700;
      color: #fff;
      border: none;
      opacity: 0.8;

      :hover {
        opacity: 1;
      }
    }

    .no {
      background-color: #818080;
    }

    .yes {
      background-color: rgb(11, 173, 227);
    }
  }
`;
