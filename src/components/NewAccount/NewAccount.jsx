import { ButtonS } from "../Navbar/navbarStyles";
import { FormNewAccount } from "./NewAccountStyles";
import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { useState } from "react";

export function NewAccount() {
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState({
    name: "",
    username: "test1",
    email: "test7",
    password: "test1",
    avatar: "test1",
    background: "test1",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  }

  function cadastrar(e) {
    e.preventDefault();

    const { name, username, email, password, avatar, background } = user;

    if (!name && !username && !email && !password && !avatar && !background) {
      return alert("É necessário preencher todos os campos!");
    }

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message != "User created successfully") {
          alert(data.message);
          return;
        }
        setIsOpen(!isOpen);
        console.log(data);
        alert("usuario cadastrado: " + data.user.id);
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  }

  return (
    <>
      {isOpen ? (
        <SignInContainer id="newaccount">
          <FormNewAccount>
            <i onClick={() => setIsOpen(!isOpen)} className="bi bi-x"></i>

            <h1>Cadastro</h1>
            <InputS
              type="text"
              placeholder="Nome"
              name="name"
              onChange={handleChange}
              required={user.name}
            />
            <InputS
              type="text"
              placeholder="Nome de usuário"
              name="username"
              onChange={handleChange}
            />
            <InputS
              type="text"
              placeholder="Link Avatar"
              name="avatar"
              onChange={handleChange}
            />
            <InputS
              type="text"
              placeholder="Link do Background"
              name="background"
              onChange={handleChange}
            />
            <InputS
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
            />
            <InputS
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleChange}
            />

            <ButtonS type="submit" onClick={cadastrar}>
              Cadastrar
            </ButtonS>
          </FormNewAccount>
        </SignInContainer>
      ) : null}
    </>
  );
}
