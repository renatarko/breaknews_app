import styled, { css } from "styled-components";

const CustomButton = styled.button`
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
  padding: 0.6rem 1rem;

  ${({ isAbsolute, withOutColor }) => css`
    position: ${isAbsolute && "absolute"};
    bottom: ${isAbsolute && "0"};
    right: ${isAbsolute && "0"};
    margin: ${isAbsolute && "0.7rem"};
    padding: ${isAbsolute && "0.5rem"};
    background-color: ${withOutColor ? "none" : "#003780"};
    padding: ${withOutColor && "0.3rem .5rem"};
    color: ${withOutColor && "#003780"};

    @media (max-width: 450px) {
      .icon-send {
        width: ${isAbsolute && "1rem"};
      }
    }

    :hover {
      background-color: ${withOutColor ? "#06489e2f" : "#06489e"};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = ({ children, isAbsolute, withOutColor, ...props }) => {
  return (
    <CustomButton
      {...props}
      isAbsolute={isAbsolute}
      withOutColor={withOutColor}
    >
      {children}
    </CustomButton>
  );
};
