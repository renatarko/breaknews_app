import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { FormNewNews } from "../NewNews/NewNewsStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function EditNews({ news, open, setOpen }) {
  const navigate = useNavigate();

  const [updatedNews, setUpdatedNews] = useState({
    title: news?.title,
    banner: news?.banner,
    text: news?.text,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setUpdatedNews({ ...updatedNews, [name]: value });
  }

  const token = localStorage.getItem("token");

  function sendUpdatedNews(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/news/${news.id}`, {
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

        navigate(0);
      })
      .catch((error) => console.log(error.message));
  }

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
              value={updatedNews.title}
            ></InputS>
            <InputS
              placeholder="Banner"
              onChange={handleInputChange}
              name="banner"
              value={updatedNews.banner}
            ></InputS>
            <textarea
              onChange={handleInputChange}
              value={updatedNews.text}
              name="text"
              cols="50"
              rows="50"
              placeholder="Texto"
            ></textarea>

            <ButtonS onClick={sendUpdatedNews}>Atualizar</ButtonS>
          </FormNewNews>
        </SignInContainer>
      ) : null}
    </>
  );
}
