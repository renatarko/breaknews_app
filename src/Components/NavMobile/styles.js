import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    ${({ openMenu }) =>
      css`
        width: ${openMenu ? "20%" : "80%"};
        padding: ${openMenu ? "0" : "1rem 1.5rem"};
      `}

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    position: fixed;
    top: 0;

    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 5px;
    background-color: #fff;
    z-index: 200;

    .btn-close {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      color: rgb(0, 74, 173);

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Container = styled.nav`
  margin-top: 5rem;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: #787878;
  z-index: 200;
`;
