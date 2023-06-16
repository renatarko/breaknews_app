import styled from "styled-components";

export const Dropdown = styled.div`
  background-color: #fff;
  position: absolute;
  top: 5rem;
  right: 1.5rem;
  opacity: 0;
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;

  .getOut,
  .profile {
    background: none;
    border: none;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.8rem 1rem;
    cursor: pointer;
    font-weight: bold;
    opacity: 0.9;

    > svg {
      transition: all 0.2s ease-in-out;
    }

    > span {
      text-transform: uppercase;
    }
  }

  > button:hover {
    background-color: #80808030;
    color: rgb(16, 134, 245);

    > svg {
      transform: scale(1.1);
    }
  }

  @media (max-width: 600px) {
    opacity: 1;
    position: inherit;
    margin-top: 2rem;

    .getOut,
    .profile {
      font-size: 1.1rem;
      padding: 1.2rem 0;
    }
  }
`;

export const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #f5f5f5;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 500;
  color: rgb(16, 134, 245);

  &:hover ${Dropdown} {
    opacity: 1;
    top: 6rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    background-color: transparent;
    flex-direction: column-reverse;
    border-radius: 0;

    .initialName {
      text-align: center;

      :after {
        content: "";
        display: block;
        width: 5rem;
        height: 1px;
        background-color: #80808030;
      }
    }
  }
`;
