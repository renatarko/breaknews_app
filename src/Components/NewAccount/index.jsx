import { ButtonS } from "../Navbar/navbarStyles";
import { FormNewAccount } from "./NewAccountStyles";
import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export function NewAccount() {
  const [isOpen, setIsOpen] = useState(true);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
    background: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  }

  async function cadastrar(e) {
    e.preventDefault();

    const { name, username, email, password, avatar, background } = user;

    if (!name && !username && !email && !password && !avatar && !background) {
      return toast.error("Você precisa preencher todos os campos", {
        position: "top-right",
      });
    }

    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();

      const result = data.message == "User created successfully";

      const loading = toast.loading("Salvando seus dados...", {
        position: "top-right",
      });

      if (result) {
        toast.dismiss(loading);
        toast.success("Usuário cadastrado", { position: "top-right" });

        setIsOpen(false);
        return;
      }
    } catch (error) {
      toast.error("Ops, algo deu errado!", { position: "top-right" });
      console.log(error.message);
    }
  }

  return (
    <>
      {isOpen ? (
        <>
          <Toaster />
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
              {/* <InputS
                type="text"
                placeholder="Link Avatar"
                name="avatar"
                onChange={handleChange}
              /> */}
              <InputS type="file" name="avatar"></InputS>
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
        </>
      ) : null}
    </>
  );
}
