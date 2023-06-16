import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2d2e2eb5;
`;

export const Modal = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
