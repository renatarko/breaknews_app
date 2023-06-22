import * as S from "./styles";

export const Input = ({
  type,
  placeholder,
  name,
  value,
  icon,
  handleChange,
  onFocus,
  error,
}) => {
  return (
    <S.Container>
      {icon}
      <S.Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={value}
        onChange={handleChange}
        onFocus={onFocus}
      />
      {error}
    </S.Container>
  );
};
