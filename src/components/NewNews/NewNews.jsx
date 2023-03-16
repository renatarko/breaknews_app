import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { FormNewNews } from "./NewNewsStyles";
import { useState } from "react";

export function NewNews() {
  const [open, setOpen] = useState(true);

  const [newNews, setNewNews] = useState({
    title: "",
    banner: "",
    text: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setNewNews({ ...newNews, [name]: value });
  }

  function enviarNoticia(e) {
    e.preventDefault();

    const { title, banner, text } = newNews;

    if (!title && !banner && !text) {
      return alert("Preencha os campos");
    }

    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/news/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newNews),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data.message);

        setOpen(false);
      })
      .catch((error) => error.message);
  }

  return (
    <>
      {open ? (
        <SignInContainer>
          <FormNewNews>
            <i onClick={() => setOpen(!open)} className="bi bi-x"></i>

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

            <ButtonS onClick={enviarNoticia}>Publicar</ButtonS>
          </FormNewNews>
        </SignInContainer>
      ) : null}
    </>
  );
}
