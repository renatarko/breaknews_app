import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createUserService } from "../../Services/userServices";
import { ButtonS } from "../Navbar/styles";
import { InputS, SignInContainer } from "../SignIn/styles";
import { FormNewAccount } from "./styles";

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

  const navigative = useNavigate();
  async function cadastrar(e) {
    e.preventDefault();

    const { name, username, email, password, avatar, background } = user;

    if (!name && !username && !email && !password && !avatar && !background) {
      return toast.error("Preencha os campos para Cadastrar.", {
        position: "top-right",
      });
    }

    try {
      const response = await createUserService(user);
      const data = await response.json();

      const loading = toast.loading("Salvando seus dados...", {
        position: "top-right",
      });

      const result = data.message == "User created successfully";
      
      if (result) {
        toast.dismiss(loading);
        toast.success("Usuário cadastrado", { position: "top-right" });
        
        const userID = data.user.id;
        const userLocal = localStorage.setItem("user", JSON.stringify(user));
        console.log("local", userLocal);
        
        setIsOpen(false);
        navigative(`profile/${userID}`);
        // return;
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
        </>
      ) : null}
    </>
  );
}
