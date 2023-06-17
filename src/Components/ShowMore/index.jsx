import { ChevronDown } from "lucide-react";
import styled from "styled-components";

const ButtonMore = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding: 0.5rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #0d64c0;
  cursor: pointer;

  &:hover {
    color: #083e78;
    font-weight: 500;
  }

  .arrow {
    transition: 0.3s;
  }

  &:hover .arrow {
    transform: scale(1.2);
  }
`;

export const ShowMore = ({ onClick, text, withIcon }) => {
  return (
    <ButtonMore className="btn-showMore" onClick={onClick}>
      {withIcon && <ChevronDown className="arrow" size={18} />}
      {/* <ChevronDown className="arrow" size={18} /> */}
      <span>{text}</span>
    </ButtonMore>
  );
};
