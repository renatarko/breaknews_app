import { Link, Mail, User2 } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useAuth } from "../../Context/authContext";
import { updatedUserService } from "../../Services/userServices";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";

export function EditUser({ open, setOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, token } = useAuth();

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

  async function editUser(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await updatedUserService(user._id, token, userData);
      await response.json();
      toast.success("Perfil atualizado!");

      setOpen(false);
      navigate(0);
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
              onChange={handleInputToEditDataUser}
              value={userData.name}
            />
            <Input
              icon={<User2 />}
              type="text"
              placeholder="Nome do usuário"
              name="username"
              onChange={handleInputToEditDataUser}
              value={userData.username}
            />
            <Input
              icon={<Mail />}
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={handleInputToEditDataUser}
              value={userData.email}
            />
            <Input
              icon={<Link />}
              type="text"
              placeholder="Background"
              name="background"
              onChange={handleInputToEditDataUser}
              value={userData.background}
            />
            <Input
              icon={<Link />}
              type="text"
              placeholder="Avatar"
              name="avatar"
              onChange={handleInputToEditDataUser}
              value={userData.avatar}
            />
            <Button onClick={editUser} disabled={isLoading}>
              {isLoading ? <ClipLoader color="#fff" size={14} /> : "Atualizar"}
            </Button>
          </Form>
        </Modal>
      ) : null}
    </>
  );
}
