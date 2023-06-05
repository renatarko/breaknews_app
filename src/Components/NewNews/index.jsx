import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewNewsService } from "../../Services/postsServices";
import { ButtonS } from "../Navbar/styles";
import { InputS, SignInContainer } from "../SignIn/styles";
import { FormNewNews } from "./styles";

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

  async function createNewNews(e) {
    e.preventDefault();

    const { title, banner, text } = newNews;

    if (!title && !banner && !text) {
      return alert("Preencha os campos");
    }

    // console.log(newNews);

    const response = await createNewNewsService(newNews, token);
    const data = await response.json();
    console.log("data", data);

    // alert(data.message);

    setOpen(false);
    navigate(0);
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

            <ButtonS type="submit" onClick={createNewNews}>Publicar</ButtonS>
          </FormNewNews>
        </SignInContainer>
      ) : null}
    </>
  );
}
