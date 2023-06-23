import * as S from "./styles";

export const Input = ({ icon, error, ...props }) => {
  return (
    <S.Container>
      {icon}
      <S.Input {...props} />
      {error}
    </S.Container>
  );
};
