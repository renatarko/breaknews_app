import styled from "styled-components";

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 6rem;
  /* padding: 1rem 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;

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
`;
