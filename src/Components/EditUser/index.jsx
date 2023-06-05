import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updatedUserService } from "../../Services/userServices";
import { ButtonS } from "../Navbar/styles";
import { FormNewAccount } from "../NewAccount/styles";
import { InputS, SignInContainer } from "../SignIn/styles";

export function EditUser({ open, setOpen, token, user }) {
  const navigate = useNavigate();
  const _userID = user.id

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

    const response = await updatedUserService(_userID, token, userData);
    const data = await response.json();

    if (data.message === "User successfuly update") {
      toast.success("Perfil atualizado!");

      setInterval(() => {
        setOpen(false);
        navigate(0);
      }, 1000);
      return;
    }
  }

  return (
    <>
      <Toaster />
      {open ? (
        <SignInContainer>
          <FormNewAccount>
            <i onClick={() => setOpen(false)} className="bi bi-x"></i>

            <h1>Editar Perfil</h1>
            <InputS
              placeholder="Nome"
              name="name"
              onChange={handleInputToEditDataUser}
              value={userData.name}
            ></InputS>
            <InputS
              placeholder="Nome do usuário"
              name="username"
              onChange={handleInputToEditDataUser}
              value={userData.username}
            ></InputS>
            <InputS
              placeholder="E-mail"
              name="email"
              onChange={handleInputToEditDataUser}
              value={userData.email}
            ></InputS>

            <InputS
              placeholder="Background"
              name="background"
              onChange={handleInputToEditDataUser}
              value={userData.background}
            ></InputS>
            <InputS
              placeholder="Avatar"
              name="avatar"
              onChange={handleInputToEditDataUser}
              value={userData.avatar}
            ></InputS>
            <ButtonS onClick={editUser}>Atualizar</ButtonS>
          </FormNewAccount>
        </SignInContainer>
      ) : null}
    </>
  );
}
