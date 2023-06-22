import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { NewAccount } from "../NewAccount/index";

import { Lock, Mail } from "lucide-react";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import ClipLoader from "react-spinners/ClipLoader";
import { Modal } from "../Modal";

import * as S from "./styles";

export function SignIn() {
  const [open, setOpen] = useState(true); //abrir modal de login
  const [openNew, setOpenNew] = useState(false); // abrir modal para cadastrar usuário
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { signIn, messageError, setMessageError } = useAuth();

  const navigative = useNavigate();

  function handleChangeInput(e) {
    const { name, value } = e.target;

    setUserLogin({ ...userLogin, [name]: value });
  }

  async function fazerLogin(e) {
    e.preventDefault();

    if (!userLogin.email || !userLogin.password) {
      return setMessageError("Preencha os campos para fazer Login.");
    }

    try {
      setLoading(true);
      const user = await signIn(userLogin);

      if (user) {
        return navigative(`/breaknews_app/profile`);
      }
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setLoading(false);
    }
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
      {/* <Toaster /> */}
      {open ? (
        // <Modal>
        <Form
          title="Entrar"
          handleClick={() => setOpen(false)}
          isNoAccount
          handleOpen={handleOpenNewAccount}
        >
          <Input
            icon={<Mail />}
            type="email"
            placeholder="E-mail"
            name="email"
            handleChange={handleChangeInput}
            onFocus={() => setMessageError("")}
          />

          <Input
            icon={<Lock />}
            type="password"
            placeholder="Senha"
            name="password"
            handleChange={handleChangeInput}
          />
          <S.Error>{messageError}</S.Error>
          <Button handleClick={fazerLogin}>
            {loading ? <ClipLoader color="#fff" size={16} /> : "enviar"}
          </Button>

          <S.ContainerNewAccount>
            <p>Não tem uma conta?</p>
            <Link
              to="/breaknews_app/sign-up"
              style={{ textDecoration: "none" }}
            >
              <S.ButtonCreatedUser>Cadastre-se</S.ButtonCreatedUser>
            </Link>
          </S.ContainerNewAccount>
        </Form>
      ) : null}
    </>
  );
}
