import { Logo } from "../Logo";
import * as S from "./styles";

export const GridContainer = ({ form, title, description }) => {
  return (
    <S.Grid>
      <S.Container>
        <Logo white />

        <S.Content>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{description}</S.SubTitle>
        </S.Content>
      </S.Container>

      <S.ContainerForm>{form}</S.ContainerForm>
    </S.Grid>
  );
};
