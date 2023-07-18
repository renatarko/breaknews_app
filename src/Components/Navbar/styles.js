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

export const BtnOpenMenu = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;

    margin: 0 1.5rem;
    position: fixed;
    top: 2.8rem;
    z-index: 150;
  }
`;
