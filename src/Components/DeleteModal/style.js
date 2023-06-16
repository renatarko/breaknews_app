import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: 100%;
  height: 100%; */
  /* background-color: #00000080; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 2rem;
`;

export const Title = styled.h3`
  color: #3a3939;
  margin-bottom: 2rem;
`;

export const Content = styled.div``;

export const Description = styled.p`
  text-align: center;
  margin: 1rem 0;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #fff;
  border: none;
  opacity: 0.8;
`;
export const ButtonConfirm = styled(Button)`
  background-color: rgb(11, 173, 227);
`;

export const ButtonNo = styled(Button)`
  background-color: #818080;
`;
