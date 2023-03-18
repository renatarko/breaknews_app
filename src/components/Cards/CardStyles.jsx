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
  position: relative;

  .icon-dotsmenu {
    background: none;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .navMenuDots {
    position: absolute;
    background: #fff;
    top: 2rem;
    right: 1rem;
    width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    border-radius: 0.3rem;
    padding: 0.2rem 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: none;
      border: none;
      cursor: pointer;
      color: #464646;

      span {
        font-size: 1rem;
      }

      :hover {
        color: #0f0f0f;
      }
    }
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

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    /* object-position: center; */
    border-radius: 0.3rem;
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
    gap: 0.2rem;
    cursor: pointer;
    font-size: 1rem;

    :focus .like {
      color: rgb(8, 140, 184);
      transform: scale(1.1);
    }

    .like-fill {
      color: rgb(8, 140, 184);
      opacity: 0;
    }
  }
`;
