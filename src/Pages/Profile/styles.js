import styled from "styled-components";

export const ProfileBody = styled.section`
  width: 80%;
  margin: 0 auto;
  max-width: 90%;
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  .box-button {
    display: flex;
    background-color: #f5f5f5;
    align-items: center;
    gap: .5rem;
    position: absolute;
    right: 0;
    z-index: 90;
    padding: 0.5rem;
    border-radius: 20px 0px 10px 20px ;
    margin: 0.2rem;

    button {
      background: none;
      border: none;
      font-size: 1.4rem;
      color: rgb(11, 173, 227);
      cursor: pointer;
      transition: 0.3s;

      :hover {
        color:  rgb(14, 154, 247);
        transform: rotate(90deg);
      }
    }
  }

  .backTo {
    font-size: 1.2rem;
    color:rgb(11, 173, 227);
    cursor: pointer;
    transition: all 0.3s;

    :hover {
        color:  rgb(14, 154, 247);
      }
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

  .img-background {
    width: 100%;
    height: 8rem;
    object-fit: cover;
    background-color: #d9d9d9;
    border-radius: 0.3rem 0.3rem 0 0;
  }

  .img-profile {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    position: absolute;
    top: -3rem;
    bottom: 0;
    margin: auto;
    left: 1rem;
    border: 4px solid  #fff;
    object-fit: cover;
  }
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 1.5rem;

  .name {
    font-family: Newsreader, serif;
    font-size: 1.7rem;
    color: #000;
    margin-bottom: 0;
  }

  .createNew{
    background: none;
    border: none;
    font-size: 1.8rem;
    color: rgb(11, 173, 227);
    cursor: pointer;
    transition: 0.3s;

    &:hover{
      color: rgb(14, 154, 227);
    }
  }
`;
