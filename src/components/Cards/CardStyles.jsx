import styled from "styled-components";

export const CardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0.5rem;
  background-color: #fff;
  padding: 1.5rem;
`;

export const CardBody = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  cite {
    color: #757575;
  }

  img {
    width: 30%;
    object-fit: contain;
    object-position: center;
    border-radius: 0.3rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.2rem;
  }
`;
