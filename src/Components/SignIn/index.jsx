import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { NewAccount } from "../NewAccount/index";

import { Lock, Mail } from "lucide-react";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";

export function SignIn() {
  const [open, setOpen] = useState(true); //abrir modal de login
  const [openNew, setOpenNew] = useState(false); // abrir modal para cadastrar usuário

  const { signIn, messageError } = useAuth();

  const navigative = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(e) {
    const { name, value } = e.target;

    setUserLogin({ ...userLogin, [name]: value });
  }

  async function fazerLogin(e) {
    e.preventDefault();

    if (!userLogin.email || !userLogin.password) {
      return toast.error("Preencha os campos!");
    }

    try {
      const user = await signIn(userLogin);
      // setOpen(false);
      navigative(`/breaknews_app/profile/${user.username}`);
    } catch (error) {
      console.log("error", error);
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
        <Modal>
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
            />

            <Input
              icon={<Lock />}
              type="password"
              placeholder="Senha"
              name="password"
              handleChange={handleChangeInput}
            />
            <Button handleClick={fazerLogin}>enviar</Button>
          </Form>
        </Modal>
      ) : null}
    </>
  );
}
