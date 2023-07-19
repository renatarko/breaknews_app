import styled from "styled-components";

import * as FormStyle from "../../Components/Form/styles";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.article`
  background: #003780;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  text-align: center;
  color: #fff;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  font-weight: 500;
  margin-top: 1rem;
  padding: 0 2rem;
`;

export const ContainerForm = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #fff;
  position: relative;

  ${FormStyle.Wrapper} {
    width: 100%;
    min-width: 0;
    padding: 0.5rem;

    .btn-close {
      display: none;
    }
  }
`;
