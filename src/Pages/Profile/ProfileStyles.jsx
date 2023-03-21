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
    align-items: center;
    gap: 1rem;
    position: absolute;
    right: 0;
    z-index: 90;
    margin: 0.8rem;

    button {
      background: none;
      border: none;
      font-size: 1.4rem;
      color: #fff;
      cursor: pointer;
      padding: 0.3rem;
    }
  }

  .bi-arrow-left-circle {
    /* position: absolute; */
    /* z-index: 100; */
    font-size: 1.2rem;
    color: #fff;
    /* margin: 0.2rem; */
    cursor: pointer;
  }
`;

export const ContainerCardProfile = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #fff;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 2rem;

  .img-background {
    width: 100%;
    height: 6rem;
    object-fit: cover;
    background-color: #d9d9d9;
    border-radius: 0.3rem 0.3rem 0 0;
  }

  .img-profile {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    border: 4px solid rgb(11, 173, 227);
    object-fit: cover;
    /* z-index: 100; */
  }
`;

export const BoxText = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;

  i {
    font-size: 1.8rem;
    color: rgb(11, 173, 227);
    cursor: pointer;
  }
`;
