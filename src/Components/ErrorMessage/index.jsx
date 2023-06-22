import styled from "styled-components";

const MessageError = styled.p`
  width: 100%;
  margin-left: 0.5rem;
  color: #d31010;
  font-size: 0.9rem;
`;

export const Error = ({ children }) => {
  return <MessageError>{children}</MessageError>;
};
