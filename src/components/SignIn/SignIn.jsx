import { FormSign, InputS, SignInContainer } from "./SignInStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { useState } from "react";

export function SignIn() {
  const [open, setOpen] = useState(true);

  function hadleMenu() {
    setOpen(!open);
  }

  return (
    <>
      {open ? (
        <SignInContainer>
          <FormSign>
            <i onClick={hadleMenu} className="bi bi-x"></i>

            <h1>Entrar</h1>
            <div className="containerInput">
              <InputS
                type="text"
                placeholder="E-mail"
                onChange={(e) => console.log(e.target.value)}
              />
              <InputS
                type="password"
                placeholder="Senha"
                onChange={(e) => console.log(e.target.value)}
              />
              <ButtonS>Enviar</ButtonS>
            </div>

            <div className="containerNewcount">
              <p>Não tem uma conta?</p>
              <a href="">Cadastre-se</a>
            </div>
          </FormSign>
        </SignInContainer>
      ) : (
        ""
      )}
    </>
  );
}
