import { FormSign, InputS, SignInContainer } from "./SignInStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { Profiler, useState } from "react";
import { NewAccount } from "../NewAccount/NewAccount";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Profile } from "../../Pages/Profile/Profile";

export function SignIn() {
  const [open, setOpen] = useState(true); //abrir modal de login
  const [openNew, setOpenNew] = useState(false); // abrir modal para cadastrar usuário

  const navigative = useNavigate();

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

    fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        const { token, user } = data;
        console.log(user.id);

        if (token) {
          alert("Olá " + userLogin.email);

          localStorage.setItem("token", token);
          // localStorage.setItem("user", user);
          setOpen(false);

          if (token) {
            const params = user.id;
            return navigative(`/profile/${params}`);
          }
          return;
        }

        alert("Ops, usuário não encontrado");
      })
      .catch((error) => console.log(error.message));
  }

  function handleOpenNewAccount(e) {
    e.preventDefault();

    setOpenNew(true);
    console.log(openNew);
  }

  if (openNew) {
    return <NewAccount />;
  }
  console.log(openNew);
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
