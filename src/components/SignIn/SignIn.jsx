import { FormSign, InputS, SignInContainer } from "./SignInStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function SignIn() {
  const [open, setOpen] = useState(false);
  function hadleMenu() {
    setOpen(!open);
    // console.log(open);
  }

  return (
    <>
      {open ? (
        <SignInContainer>
          <FormSign>
            <i onClick={hadleMenu} className="bi bi-x"></i>

            <h1>Entrar</h1>
            <div className="containerInput">
              <InputS type="text" placeholder="E-mail" />
              <InputS type="password" placeholder="Senha" />
              <ButtonS>Enviar</ButtonS>
            </div>

            <div className="containerNewcount">
              <p>Não tem uma conta?</p>
              {/* <NavLink to="/newAccount">Cadastre-se</NavLink> */}
            </div>
          </FormSign>
        </SignInContainer>
      ) : (
        ""
      )}
    </>
  );
}
