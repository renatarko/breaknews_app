import { X } from "lucide-react";
import * as S from "./styles";

export const Form = ({
  title,
  children,
  handleClick,
  isNoAccount,
  handleOpen,
}) => {
  return (
    <S.Wrapper>
      <X className="btn-close" onClick={handleClick} />
      <S.Title>{title}</S.Title>
      {children}

      {isNoAccount && (
        <S.ContainerNewAccount>
          <p>Não tem uma conta?</p>
          <button onClick={handleOpen}>Cadastre-se</button>
        </S.ContainerNewAccount>
      )}
    </S.Wrapper>
  );
};
