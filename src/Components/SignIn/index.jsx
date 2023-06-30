import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

import { ArrowLeft, Lock, Mail } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";

import * as S from "./styles";

export function SignIn() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const { signIn, messageError, setMessageError } = useAuth();

  const navigative = useNavigate();

  function handleChangeInput(e) {
    const { name, value } = e.target;

    const userLoginUpdated = { ...userLogin, [name]: value };
    setUserLogin(userLoginUpdated);
    checkInputValues(userLoginUpdated);
  }

  function checkInputValues(userLoginUpdated) {
    const { email, password } = userLoginUpdated;

    const isValid = email && password;

    setMessageError(!isValid && "Preencha os campos para fazer Login.");
    setIsDisabled(!isValid);
  }

  async function fazerLogin(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const user = await signIn(userLogin);

      if (user) {
        return navigative(`/profile`);
      }
    } catch (error) {
      console.log("error", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Link
        to="/"
        style={{
          position: "absolute",
          zIndex: 1000,
          top: 0,
          left: 0,
          margin: "1.5rem",
          color: "rgb(0, 55, 128)",
        }}
      >
        <ArrowLeft />
      </Link>

      <Form title="Entrar" isNoAccount>
        <Input
          icon={<Mail />}
          type="email"
          placeholder="E-mail"
          name="email"
          onInput={handleChangeInput}
          onFocus={() => setMessageError("")}
        />

        <Input
          icon={<Lock />}
          type="password"
          placeholder="Senha"
          name="password"
          onInput={handleChangeInput}
        />
        <S.Error>{messageError}</S.Error>
        <Button onClick={fazerLogin} disabled={isDisabled}>
          {loading ? <ClipLoader color="#fff" size={16} /> : "enviar"}
        </Button>

        <S.ContainerNewAccount>
          <p>Não tem uma conta?</p>
          <Link to="/sign-up" style={{ textDecoration: "none" }}>
            <S.ButtonCreatedUser>Cadastre-se</S.ButtonCreatedUser>
          </Link>
        </S.ContainerNewAccount>
      </Form>
    </>
  );
}
