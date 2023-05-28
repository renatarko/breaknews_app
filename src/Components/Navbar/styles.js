import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  padding: 1rem 1rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 5px;
  background-color: #fff;
  z-index: 100;
`;

export const ContainerSearch = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  position: relative;

  > input {
    width: 100%;
    background-color: #f5f5f5;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;

    :focus {
      border-color: #0bade3;
    }
  }

  > i {
    position: absolute;
    top: 1;
    right: 0.2rem;
    background-color: #f5f5f5;
    padding: 0.3rem;
    color: #757575;
    border-radius: 0.5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  h2 {
    background: #1086f5;
    background: linear-gradient(to bottom right, #1086f5 26%, #757575 87%);
    /* -webkit-background-clip: text; */
    -webkit-text-fill-color: transparent;
    line-height: 20px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ButtonS = styled.button`
  padding: 0.4rem 1rem;
  background-color: #0bade3;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  margin-top: 1.5rem;

  :hover {
    background-color: #0a98c7;
  }
`;

export const ButtonProfile = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  clip-path: circle();
  object-fit: cover;
  cursor: pointer;
  /* background-color: none; */
  /* position: relative; */
`;

export const ContainerNav = styled.nav`
  background-color: #fff;
  position: absolute;
  top: 5rem;
  right: 0.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.3rem;

  button,
  .profile {
    width: 4rem;
    background: none;
    border: none;
    padding: 0.3rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.9rem;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    opacity: 0.9;

    :hover {
      opacity: 1;
    }

    :hover i {
      color: rgb(8, 140, 184);
    }
  }
`;
