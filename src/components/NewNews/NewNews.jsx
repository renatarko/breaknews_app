import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { FormNewNews } from "./NewNewsStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewNews({ open, setOpen, token }) {
  const [newNews, setNewNews] = useState({
    title: "",
    banner: "",
    text: "",
  });

  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;

    setNewNews({ ...newNews, [name]: value });
  }

  function createNewNews(e) {
    e.preventDefault();

    const { title, banner, text } = newNews;

    if (!title && !banner && !text) {
      return alert("Preencha os campos");
    }

    fetch("http://localhost:3000/news/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newNews),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);

        setOpen(false);
        navigate(0);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <>
      {open ? (
        <SignInContainer>
          <FormNewNews>
            <i onClick={() => setOpen(false)} className="bi bi-x"></i>

            <h1>Publicar Notícia</h1>
            <InputS
              placeholder="Título"
              name="title"
              onChange={handleInputChange}
            ></InputS>
            <InputS
              placeholder="Banner"
              name="banner"
              onChange={handleInputChange}
            ></InputS>
            <textarea
              name="text"
              cols="40"
              rows="5"
              placeholder="Texto"
              onChange={handleInputChange}
            ></textarea>

            <ButtonS onClick={createNewNews}>Publicar</ButtonS>
          </FormNewNews>
        </SignInContainer>
      ) : null}
    </>
  );
}
