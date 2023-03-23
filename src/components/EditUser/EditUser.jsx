import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonS } from "../Navbar/navbarStyles";
import { FormNewAccount } from "../NewAccount/NewAccountStyles";
import { InputS, SignInContainer } from "../SignIn/SignInStyles";

export function EditUser({ open, setOpen, token, user }) {
  const navigate = useNavigate();

  const [editUserData, setEditUserData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    background: user.background,
    avatar: user.avatar,
  });

  function handleInputToEditDataUser(e) {
    const { name, value } = e.target;

    setEditUserData({ ...editUserData, [name]: value });
  }

  function editUser(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/user/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Perfil atualizado com sucesso");
        setOpen(false);
        navigate(0);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <>
      {open ? (
        <SignInContainer>
          <FormNewAccount>
            <i onClick={() => setOpen(false)} className="bi bi-x"></i>

            <h1>Editar Perfil</h1>
            <InputS
              placeholder="Nome"
              name="name"
              onChange={handleInputToEditDataUser}
              value={editUserData.name}
            ></InputS>
            <InputS
              placeholder="Nome do usuário"
              name="username"
              onChange={handleInputToEditDataUser}
              value={editUserData.username}
            ></InputS>
            <InputS
              placeholder="E-mail"
              name="email"
              onChange={handleInputToEditDataUser}
              value={editUserData.email}
            ></InputS>

            <InputS
              placeholder="Background"
              name="background"
              onChange={handleInputToEditDataUser}
              value={editUserData.background}
            ></InputS>
            <InputS
              placeholder="Avatar"
              name="avatar"
              onChange={handleInputToEditDataUser}
              value={editUserData.avatar}
            ></InputS>
            <ButtonS onClick={editUser}>Atualizar</ButtonS>
          </FormNewAccount>
        </SignInContainer>
      ) : null}
    </>
  );
}
