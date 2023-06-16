import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  padding: 1rem 2.5rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 5px;
  background-color: #fff;
  z-index: 100;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContainerSearch = styled.div``;

export const BtnOpenMenu = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    cursor: pointer;
    z-index: 250;

    .openMenu {
      margin: 0 1.5rem;
      position: absolute;
      top: 2.8rem;
      border-radius: 50%;
      padding: 0.15rem;
      transition: all 0.2s ease-in-out;
      z-index: 150;

      :hover {
        background-color: rgba(17, 17, 26, 0.1);
      }
    }
  }
`;
