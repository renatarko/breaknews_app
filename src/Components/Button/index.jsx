import styled, { css } from "styled-components";

const CustomButton = styled.button`
  padding: 0.6rem 1rem;
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

  ${({ absolute }) => css`
    position: ${absolute && "absolute"};
    bottom: ${absolute && "0"};
    right: ${absolute && "0"};
    margin: ${absolute && "0.7rem"};
    padding: ${absolute && "0.5rem"};

    .icon-send {
      width: ${absolute && "1.6rem"};
    }

    @media (max-width: 450px) {
      .icon-send {
        width: ${absolute && "1rem"};
      }
    }
  `}

  :hover {
    background-color: #06489e;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = ({ children, absolute, ...props }) => {
  return (
    <CustomButton {...props} absolute={absolute}>
      {children}
    </CustomButton>
  );
};
