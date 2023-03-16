import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { FormNewNews } from "../NewNews/NewNewsStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { useState } from "react";

export function EditNews({ newId }) {
  const [open, setOpen] = useState(true);

  const [updatedNews, setUpdatedNews] = useState({
    title: "",
    banner: "",
    text: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setUpdatedNews({ ...updatedNews, [name]: value });
  }

  function sendUpdatedNews(e) {
    e.preventDefault();

    fetch(`http://localhost:5000/news/${newId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedNews),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setOpen(false);
      })
      .catch((error) => console.log(error.message));
  }

  const token = localStorage.getItem("token");

  return (
    <>
      {open ? (
        <SignInContainer>
          <FormNewNews>
            <i onClick={() => setOpen(!open)} className="bi bi-x"></i>

            <h1>Atualizar Notícia</h1>

            <InputS
              placeholder="Título"
              onChange={handleInputChange}
              name="title"
            ></InputS>
            <InputS
              placeholder="Banner"
              onChange={handleInputChange}
              name="banner"
            ></InputS>
            <textarea
              onChange={handleInputChange}
              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Texto"
            ></textarea>

            <ButtonS onClick={sendUpdatedNews}>Atualizar</ButtonS>
          </FormNewNews>
        </SignInContainer>
      ) : null}
    </>
  );
}
