import styled from "styled-components";

export const CardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0.5rem;
  background-color: #fff;
  padding: 1.5rem 2rem;
  position: relative;

  @media (max-width: 750px) {
    padding: 1rem;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ProfileImage = styled.img`
  width: 100%;
  max-width: 15%;
  clip-path: circle();
`;

export const UserName = styled.cite``;

export const CreatedAt = styled.p`
  font-size: 0.9rem;
  margin-top: 0.2rem;
`;

export const NavCard = styled.div`
  position: absolute;
  background: #fff;
  top: 2.5rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;

export const ButtonMenuCard = styled.div`
  border-radius: 50%;
  padding: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s;
  align-self: start;

  .dots {
    color: #004aad;
  }

  :hover {
    background-color: #80808030;
  }

  &:hover ${NavCard} {
    opacity: 1;
    top: 4rem;
    right: 1rem;
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

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Text = styled.article`
  padding: 1.5rem 0;
  h2 {
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
`;

export const ImageNews = styled.img`
  max-width: 10rem;
  min-height: 10rem;
  /* max-width: 10rem;
    max-height: 10rem; */
  border-radius: 0.3rem;
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
