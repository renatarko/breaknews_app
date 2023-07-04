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

  ${({ absolute, withOutColor }) => css`
    position: ${absolute && "absolute"};
    bottom: ${absolute && "0"};
    right: ${absolute && "0"};
    margin: ${absolute && "0.7rem"};
    padding: ${absolute && "0.5rem"};
    background-color: ${withOutColor ? "none" : "#003780"};
    padding: ${withOutColor ? "0.3rem .5rem" : "0.6rem 1rem"};

    .icon-send {
      width: ${absolute && "1.6rem"};
    }

    @media (max-width: 450px) {
      .icon-send {
        width: ${absolute && "1rem"};
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

export const Button = ({ children, absolute, withOutColor, ...props }) => {
  return (
    <CustomButton {...props} absolute={absolute} withOutColor={withOutColor}>
      {children}
    </CustomButton>
  );
};
