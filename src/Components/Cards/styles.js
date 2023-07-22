import styled, { css } from "styled-components";

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
  max-width: 10%;
  min-width: 2rem;
  clip-path: circle();
`;

export const ProfileWithoutImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  padding: 1rem;
  background: #80808030;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #004aad;
`;

export const UserName = styled.cite``;

export const CreatedAt = styled.p`
  font-size: 0.9rem;
  margin-top: 0.2rem;
`;

export const NavCard = styled.div`
  ${({ openOptions }) => css`
    opacity: ${openOptions ? "1" : "0"};
    top: ${openOptions ? "2.5rem" : "1rem"};
    pointer-events: ${openOptions ? "auto" : "none"};
  `}
  position: absolute;
  background: #fff;
  right: -1.7rem;
  display: flex;
  flex-direction: column;
  border-radius: 0rem 1rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 650px) {
    opacity: 1;
    flex-direction: row;
    top: 0;
    right: 0;
    margin: 0.8rem 0.4rem;
    box-shadow: none;
    pointer-events: auto;
  }
`;

export const ButtonMenuCard = styled.div`
  border-radius: 50%;
  padding: 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.2s;
  align-self: start;
  position: relative;

  .dots {
    display: none;
  }

  :hover {
    background-color: #80808030;
  }

  @media (min-width: 650px) {
    .dots {
      display: block;
      color: #004aad;
    }
  }
`;

export const BottonNav = styled.button`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: rgb(0, 55, 128);

  span {
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  svg {
    transition: 0.2s;
  }

  :hover {
    background-color: #80808030;
  }

  :hover svg {
    transform: scale(1.1);
  }

  @media (max-width: 650px) {
    padding: 0.4rem;
    border-radius: 50%;
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

  @media (max-width: 600px) {
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const ImageNews = styled.img`
  max-width: 10rem;
  min-height: 10rem;
  border-radius: 0.3rem;
  object-fit: cover;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ButtonLike = styled.button`
  @keyframes liked {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.9);
    }
  }
  :focus {
    animation: liked 0.3s ease-in;
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
