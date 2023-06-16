import * as S from "./style";

export function DeleteModal({
  title,
  description,
  open,
  setOpen,
  handleChange,
}) {
  function handleClick() {
    setOpen(false);
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Title>{title}</S.Title>

          <S.Content>
            <i className="bi bi-x-circle-fill"></i>
            <S.Description>{description}</S.Description>
          </S.Content>

          <S.ButtonContainer>
            <S.ButtonNo onClick={handleClick}>Não</S.ButtonNo>
            <S.ButtonConfirm onClick={handleChange}>Sim</S.ButtonConfirm>
          </S.ButtonContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
