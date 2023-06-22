import { X } from "lucide-react";
import * as S from "./styles";

export const Form = ({ title, children, handleClick }) => {
  return (
    <S.Wrapper>
      <X className="btn-close" onClick={handleClick} />
      <S.Title>{title}</S.Title>
      {children}
    </S.Wrapper>
  );
};
