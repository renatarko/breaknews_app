import styled from "styled-components";

export const CardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0.5rem;
  background-color: #fff;
  padding: 1.5rem;
  position: relative;
`;

export const NavCard = styled.div`
  position: absolute;
  background: #fff;
  top: 1.7rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;

export const ButtonMenuCard = styled.div`
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s;

  .dots {
    color: #004aad;
  }

  :hover {
    background-color: #80808030;
  }

  &:hover ${NavCard} {
    opacity: 1;
    top: 2.5rem;
  }
`;

export const BottonNav = styled.button`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-radius: 0.3rem 0 0.3rem 0;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #464646;

  span {
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  svg {
    transition: 0.2s;
  }

  :hover {
    background-color: #80808030;
    color: rgb(16, 134, 245);
  }

  :hover svg {
    transform: scale(1.1);
  }
`;

export const CardBody = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const ImageNews = styled.img`
  max-width: 10rem;
  min-height: 10rem;
  /* max-width: 10rem;
    max-height: 10rem; */
  border-radius: 0.3rem;
  margin: 1rem;
  object-fit: cover;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;
    font-size: 1rem;
  }
`;
