import { GridContainer } from "../../Components/GridContainer";
import { NewAccount } from "../../Components/SignUp";

export function SignUp() {
  return (
    <GridContainer
      title="Olá! Seja Bem Vindo ✌️"
      description="Publique notícias e leia as principais notícias de quem está perto de você!"
      form={<NewAccount />}
    />
  );
}
