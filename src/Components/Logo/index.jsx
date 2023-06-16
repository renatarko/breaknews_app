import styled from "styled-components";
import logo from "../../../src/assets/logocortada.png";
const Wrapper = styled.a``;

const ImageLogo = styled.img`
  max-width: 7rem;
  width: 100%;
`;

export const Logo = () => {
  return (
    <Wrapper href="/breaknews_app/" style={{ textDecoration: "none" }}>
      <ImageLogo src={logo} alt="Logo BreakNews" />
    </Wrapper>
  );
};
