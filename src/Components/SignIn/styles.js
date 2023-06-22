import styled from "styled-components";

export const ContainerNewAccount = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1rem;

  p {
    color: #3a3939;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const ButtonCreatedUser = styled.span`
  color: #003780;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: #003780;
  }
`;

export const Error = styled.p`
  width: 100%;
  margin-left: 0.5rem;
  color: #d31010;
  font-size: 0.9rem;
`;
