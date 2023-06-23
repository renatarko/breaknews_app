import styled, { css } from "styled-components";

const CustomButton = styled.button`
  padding: 0.6rem 1rem;
  margin-top: 1rem;
  background-color: #003780;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #06489e;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = ({ children, handleClick, ...props }) => {
  return (
    <CustomButton onClick={handleClick} {...props}>
      {children}
    </CustomButton>
  );
};
