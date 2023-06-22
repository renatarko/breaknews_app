import styled, { css } from "styled-components";
import logoWhite from "../../../src/assets/logo-white.png";
import logoBlue from "../../../src/assets/logo-blue.png";

export const Wrapper = styled.a`
  text-decoration: none;
`;

const ImageLogo = styled.img`
  ${({ small }) => css`
    max-width: ${small ? "7rem" : "12rem"};
  `}

  width: 100%;
`;

export const Logo = ({ white, small }) => {
  return (
    <Wrapper href="/breaknews_app/">
      <ImageLogo
        small={small}
        src={white ? logoWhite : logoBlue}
        alt="Logo BreakNews"
      />
    </Wrapper>
  );
};
