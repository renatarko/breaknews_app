import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > a {
    text-decoration: none;
    color: #504f4f;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    padding: 0.3rem;
    transition: all 0.2s;

    :hover {
      color: #004aad;
      border-color: #004aad;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const Empty = ({ title = "404 - Página não encontrada", hasLink }) => {
  return (
    <Wrapper>
      <Image src="/images/empty.png" alt="" />

      <Title>{title}</Title>

      {hasLink && <Link to="/breaknews_app/">Voltar para a home</Link>}
    </Wrapper>
  );
};
