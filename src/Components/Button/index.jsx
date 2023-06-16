import styled from "styled-components";

const CustomButton = styled.button`
  padding: 0.6rem 1rem;
  margin: 1rem 0;
  background-color: rgb(16, 134, 245);
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: rgb(16, 104, 270);
  }

  :disabled {
    background-color: grey;
  }
`;

export const Button = ({ children, handleClick, ...props }) => {
  return (
    <CustomButton onClick={handleClick} {...props}>
      {children}
    </CustomButton>
  );
};
