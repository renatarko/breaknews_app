import { Logo } from "../../Components/Logo";
import { SignIn } from "../../Components/SignIn/index";
import * as S from "./style";

export function Login() {
  return (
    <S.Grid>
      <S.Container>
        <Logo white />

        <S.Content>
          <S.Title>Seja Bem-Vindo</S.Title>
          <S.SubTitle>
            Leia e Publique as principais notícias de quem está perto de você!
          </S.SubTitle>
        </S.Content>
      </S.Container>

      <S.ContainerForm>
        <SignIn />
      </S.ContainerForm>
    </S.Grid>
  );
}
