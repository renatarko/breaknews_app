import { Link, Mail, User2 } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { updatedUserService } from "../../Services/userServices";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";

export function EditUser({ open, setOpen }) {
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  // states: 'initial', 'loading', 'success', 'error'
  // const [status, setStatus] = useState("initial");

  const [userData, setUserData] = useState({
    name: user?.name,
    username: user?.username,
    email: user?.email,
    background: user?.background,
    avatar: user?.avatar,
  });

  function handleInputToEditDataUser(e) {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  }
  console.log(userData.name);

  async function editUser(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      toast.loading("Atualizando perfil...");

      const _userID = user.id;

      const response = await updatedUserService(_userID, token, userData);
      const data = await response.json();

      if (data.message === "User successfuly update") {
        toast.success("Perfil atualizado!");

        setOpen(false);
        navigate(0);

        return;
      }
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Toaster />
      {open ? (
        <Modal>
          <Form title="Editar Perfil" handleClick={() => setOpen(false)}>
            <Input
              icon={<User2 />}
              type="text"
              placeholder="Nome"
              name="name"
              handleChange={handleInputToEditDataUser}
              value={userData.name}
            />
            <Input
              icon={<User2 />}
              type="text"
              placeholder="Nome do usuário"
              name="username"
              handleChange={handleInputToEditDataUser}
              value={userData.username}
            />
            <Input
              icon={<Mail />}
              type="email"
              placeholder="E-mail"
              name="email"
              handleChange={handleInputToEditDataUser}
              value={userData.email}
            />
            <Input
              icon={<Link />}
              type="text"
              placeholder="Background"
              name="background"
              handleChange={handleInputToEditDataUser}
              value={userData.background}
            />
            <Input
              icon={<Link />}
              type="text"
              placeholder="Avatar"
              name="avatar"
              handleChange={handleInputToEditDataUser}
              value={userData.avatar}
            />
            <Button handleClick={editUser} disabled={isLoading}>
              {isLoading ? "loading..." : "Atualizar"}
            </Button>
          </Form>
        </Modal>
      ) : null}
    </>
  );
}
