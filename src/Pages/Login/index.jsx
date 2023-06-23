import { GridContainer } from "../../Components/GridContainer";
import { SignIn } from "../../Components/SignIn/index";

export function Login() {
  return (
    <GridContainer
      title="Bem Vindo de volta 🥳"
      description="Curta, comente e veja as principais notícias dos seus amigos! "
      form={<SignIn />}
    />
  );
}
