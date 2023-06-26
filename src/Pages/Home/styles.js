import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  /* padding: 1rem 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button-showMore {
    background: none;
    border: none;
    font-size: 1rem;
    color: #034a88;
    cursor: pointer;
    margin-top: 2rem;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const HomeBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;

  section:first-child {
    grid-column: span 2;

    img {
      width: 30%;
      height: auto;
      margin-right: 1rem;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    section:first-child {
      grid-column: span 1;
    }
  }
`;

export const ErrorNotFound = styled.h3`
  text-align: center;

  font-size: 1.4rem;
`;
