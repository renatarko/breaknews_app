import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 450;
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  background-color: #2d2e2eb5;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Modal = ({ children, onClick }) => {
  return (
    <Wrapper>
      {children}
      <Overlay onClick={onClick} />
    </Wrapper>
  );
};
