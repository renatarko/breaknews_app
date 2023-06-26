import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
  ${({ small }) => css`
    width: ${small && "15rem"};
  `}
`;

const Title = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

export const Empty = ({
  title = "404 - Página não encontrada",
  hasLink,
  small,
}) => {
  return (
    <Wrapper>
      <Image src="/images/empty.png" alt="" small={small} />

      <Title>{title}</Title>

      {hasLink && <Link to="/">Voltar para página inicial</Link>}

    </Wrapper>
  );
};
