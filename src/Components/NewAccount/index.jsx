import { Link, Lock, Mail, User2 } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createUserService } from "../../Services/userServices";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";

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
          <Modal>
            <Form title="Cadastrar" handleClick={() => setIsOpen(!isOpen)}>
              <Input
                handleChange={handleChange}
                icon={<User2 />}
                type="text"
                name="name"
                placeholder="Nome"
              />
              <Input
                handleChange={handleChange}
                icon={<User2 />}
                type="text"
                name="username"
                placeholder="Nome de usuário"
              />
              <Input
                handleChange={handleChange}
                icon={<Mail />}
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <Input
                handleChange={handleChange}
                icon={<Link />}
                type="text"
                name="avatar"
                placeholder="Avatar"
              />
              <Input
                handleChange={handleChange}
                icon={<Link />}
                type="text"
                name="background"
                placeholder="Background"
              />
              <Input
                handleChange={handleChange}
                icon={<Lock size={16} />}
                type="password"
                name="password"
                placeholder="Senha"
              />

              <Button handleClick={cadastrar}>Cadastrar</Button>
            </Form>
          </Modal>
        </>
      ) : null}
    </>
  );
}
