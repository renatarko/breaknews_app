import styled, { css } from "styled-components";

export const Dropdown = styled.div`
  ${({ open }) => css`
    opacity: ${open ? "1" : "0"};
  `}
  background-color: #fff;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 6rem;
  right: 1.5rem;
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
    font-size: 1rem;

    > svg {
      transition: all 0.2s ease-in-out;
    }

    > span {
      text-transform: uppercase;
    }
  }

  > button:hover {
    background-color: #80808030;
    color: #004aad;

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
  color: #004aad;

  @media (max-width: 600px) {
    background-color: transparent;
    flex-direction: column-reverse;

    .initialName {
      border-radius: 50%;
      text-align: center;
      position: relative;
      padding: 1rem;
      pointer-events: none;

      :after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #80808030;
        top: 0;
        right: 0;
        border-radius: 50%;
      }
    }
  }
`;
