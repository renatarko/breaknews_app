import { ButtonS } from "../Navbar/navbarStyles";
import { FormNewAccount } from "./NewAccountStyles";
import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { useState } from "react";

export function NewAccount() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNewAccount() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
      {isOpen ? (
        <SignInContainer>
          <FormNewAccount>
            <i onClick={handleNewAccount} className="bi bi-x"></i>

            <h1>Cadastro</h1>
            <InputS type="text" placeholder="Nome" />
            <InputS type="text" placeholder="Nome de usuário" />
            <InputS type="text" placeholder="Link Avatar" />
            <InputS type="text" placeholder="Link do Background" />
            <InputS type="email" placeholder="E-mail" />
            <InputS type="password" placeholder="Senha" />

            <ButtonS>Cadastrar</ButtonS>
          </FormNewAccount>
        </SignInContainer>
      ) : (
        ""
      )}
    </>
  );
}
