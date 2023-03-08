import { ButtonS } from "../Navbar/navbarStyles";
import { FormNewAccount } from "./NewAccountStyles";
import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { useRef, useState } from "react";

export function NewAccount() {
  const [isOpen, setIsOpen] = useState(true);

  async function getDados(e) {
    e.preventDefault();

    let inputInFocus = (input.current.style.borderColor = "red");
    console.log(inputInFocus);
    // try {
    //   const response = await fetch("http://localhost:3000/user");
    //   const data = await response.json();

    //   const dados = data.map((user) => {
    //     return {
    //       name: user.name,
    //       username: user.username,
    //       email: user.email,
    //       avatar: user.avatar,
    //       background: user.background,
    //     };
    //   });
    //   console.log(dados);
    // } catch {
    //   (error) => console.error(error);
    // }

    // enviarDados(user);
  }

  let [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
    background: "",
  });

  function handleChange(e) {
    const input = useRef(null);

    const { name, value } = e.target;

    setUser({ ...user, [name]: value });

    if (value == "") {
      return console.log(name);
    } else {
      return console.log("os inputs não estão vazios");
    }
  }

  // console.log(user);

  function enviarDados(user) {
    s;
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  }

  return (
    <>
      {isOpen ? (
        <SignInContainer id="newaccount">
          <FormNewAccount>
            <i onClick={() => setIsOpen(!isOpen)} className="bi bi-x"></i>

            <h1>Cadastro</h1>
            <InputS
              ref={input}
              type="text"
              placeholder="Nome"
              name="name"
              onChange={handleChange}
            />
            <InputS
              ref={input}
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
              onClick={handleChange}
            />
            <InputS
              type="password"
              placeholder="Senha"
              name="password"
              onClick={handleChange}
            />

            <ButtonS type="submit" onClick={getDados}>
              Cadastrar
            </ButtonS>
          </FormNewAccount>
        </SignInContainer>
      ) : (
        ""
      )}
    </>
  );
}
