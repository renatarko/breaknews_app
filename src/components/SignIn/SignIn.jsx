import { FormSign, InputS, SignInContainer } from "./SignInStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { useState } from "react";
import { NewAccount } from "../NewAccount/NewAccount";

export function SignIn() {
  const [open, setOpen] = useState(true);
  const [openNew, setOpenNew] = useState(false);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(e) {
    const { name, value } = e.target;

    setUserLogin({ ...userLogin, [name]: value });
  }

  function fazerLogin(e) {
    e.preventDefault();

    if (!userLogin.email && !userLogin.password) {
      return alert("Preencha os campos");
    }

    fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        //retorna o token
        const token = data;
        alert("Usuário encontrado!");
        console.log(token);

        setOpen(false);
      })
      .catch((error) => console.log(error.message));
  }

  function handleOpenNewAccount(e) {
    e.preventDefault();

    setOpenNew(true);
  }

  if (openNew) {
    return <NewAccount />;
  }

  return (
    <>
      {open ? (
        <SignInContainer>
          <FormSign>
            <i onClick={() => setOpen(false)} className="bi bi-x"></i>

            <h1>Entrar</h1>
            <div className="containerInput">
              <InputS
                type="text"
                placeholder="E-mail"
                name="email"
                onChange={handleChangeInput}
              />
              <InputS
                type="password"
                placeholder="Senha"
                name="password"
                onChange={handleChangeInput}
              />
              <ButtonS onClick={fazerLogin}>Enviar</ButtonS>
            </div>

            <div className="containerNewcount">
              <p>Não tem uma conta?</p>
              <button onClick={handleOpenNewAccount}>Cadastre-se</button>
            </div>
          </FormSign>
        </SignInContainer>
      ) : null}
    </>
  );
}
