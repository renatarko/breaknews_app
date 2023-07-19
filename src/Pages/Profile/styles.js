import styled from "styled-components";

export const ProfileBody = styled.section`
  width: 80%;
  margin: 0 auto;
  max-width: 90%;
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  @media (max-width: 650px) {
    max-width: 95%;
    width: 100%;
  }
`;

export const ContentSettings = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  right: 0;
  z-index: 90;
  padding: 0.5rem;
  border-radius: 20px 0px 10px 20px;
`;

export const Settings = styled.div`
  background-color: #f5f5f590;
  padding: 0.5rem 0.8rem;
  border-radius: 0.9rem;
  color: rgb(0, 55, 128);
  cursor: pointer;
  transition: 0.3s;

  > a {
    color: rgb(0, 55, 128);
    cursor: pointer;
  }

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 650px) {
    padding: 0.3rem 0.5rem;
  }
`;

export const ContainerCardProfile = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 2rem;

  /* .img-background {
    width: 100%;
    height: 8rem;
    object-fit: cover;
    background-color: rgb(0, 55, 128);
    border-radius: 0.3rem 0.3rem 0 0;

    @media (max-width: 600px) {
      height: 5rem;
    }
  } */

  .img-profile {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    position: absolute;
    top: -3rem;
    bottom: 0;
    margin: auto;
    left: 1rem;
    border: 4px solid #fff;
    object-fit: cover;

    @media (max-width: 600px) {
      width: 5rem;
      height: 5rem;
    }
  }

  .profile {
    background-color: #d9d9d9;
    color: #000;
    font-size: 2rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 8rem;
  border-radius: 0.3rem 0.3rem 0 0;

  @media (max-width: 600px) {
    height: 5rem;
  }
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  margin-top: 0.3rem;

  .name {
    font-size: 1.7rem;
    color: #000;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    .name {
      font-size: 1.2rem;
    }
  }
`;

export const CreateNews = styled.div`
  background: rgb(16, 134, 245);
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgb(16, 104, 270);
  }
`;
