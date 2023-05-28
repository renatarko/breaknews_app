import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ButtonS } from "../Navbar/navbarStyles";
import { FormNewAccount } from "../NewAccount/NewAccountStyles";
import { InputS, SignInContainer } from "../SignIn/SignInStyles";

export function EditUser({ open, setOpen, token, user }) {
  const navigate = useNavigate();

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
      const response = await fetch(`http://localhost:3000/user/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (data.message === "User successfuly update") {
        toast.success("Perfil atualizado!");

        setInterval(() => {
          setOpen(false);
          navigate(0);
        }, 1000);
        return;
      }
    } catch (error) {
      console.log(error.message);
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
