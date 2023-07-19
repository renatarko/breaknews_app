import {
  ArrowLeft,
  Eye,
  Link as LinkIcon,
  Lock,
  Mail,
  User2,
} from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { createUserService } from "../../Services/userServices";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import { Form } from "../Form";
import { Input } from "../Input";

export function NewAccount() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    avatar: "",
    background: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);

    checkInputValues(updatedUser);
  }

  function checkInputValues(updatedUser) {
    const { name, username, email, password } = updatedUser;
    const nameUserSplit = name?.split(" ");

    const nameuserIsvalid = nameUserSplit?.length >= 2;
    const isValid = username && email && password;

    const toDesabled = !nameuserIsvalid || !isValid;

    let errorMessage = "";
    if (!isValid) {
      errorMessage = "Preencha os campos para cadastrar";
    } else if (!nameuserIsvalid) {
      errorMessage = "Informe seu sobrenome";
    }

    setErrorMessage(errorMessage);
    setIsDisabled(toDesabled);
  }

  const navigative = useNavigate();

  async function cadastrar(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await createUserService(user);
      await response.json();

      toast.success(
        "Cadastro realizado com sucesso, faça o Login para começar a navegar",
        {
          duration: 4000,
        }
      );

      setLoading(false);

      setTimeout(() => {
        navigative(`/login`);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Toaster />
      <Link
        to="/login"
        style={{
          position: "absolute",
          zIndex: 1000,
          top: 0,
          left: 0,
          margin: "1rem",
          color: "rgb(0, 55, 128)",
        }}
      >
        <ArrowLeft />
      </Link>
      <Form title="Criar Conta">
        <Input
          onInput={handleChange}
          icon={<User2 />}
          type="text"
          name="name"
          placeholder="Nome e Sobrenome*"
        />
        <Input
          onInput={handleChange}
          icon={<User2 />}
          type="text"
          name="username"
          placeholder="Nome de usuário *"
        />
        <Input
          onInput={handleChange}
          icon={<Mail />}
          type="email"
          name="email"
          placeholder="E-mail *"
        />
        <Input
          onInput={handleChange}
          icon={<LinkIcon />}
          type="text"
          name="avatar"
          placeholder="Avatar"
        />
        <Input
          onInput={handleChange}
          icon={<LinkIcon />}
          type="text"
          name="background"
          placeholder="Background"
        />
        <div style={{ position: "relative" }}>
          <Input
            onInput={handleChange}
            icon={<Lock size={16} />}
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="Senha *"
          />
          <Eye
            onClick={() => setShowPassword(!showPassword)}
            size={16}
            color={`${showPassword ? "rgb(0, 74, 173)" : "#999"}`}
            style={{
              position: "absolute",
              right: "0.5rem",
              top: "0.75rem",
              cursor: "pointer",
            }}
          />
        </div>

        <span style={{ fontSize: "10px", marginTop: "-0.5rem" }}>
          * Campos Obrigatórios
        </span>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Button onClick={cadastrar} disabled={isDisabled}>
          {loading ? <ClipLoader color="#fff" size={16} /> : "Cadastrar"}
        </Button>
      </Form>
    </>
  );
}
