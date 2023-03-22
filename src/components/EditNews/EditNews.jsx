import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { FormNewNews } from "../NewNews/NewNewsStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { useState } from "react";

export function EditNews({ news }) {
  const [open, setOpen] = useState(true);
  console.log(news);

  const [updatedNews, setUpdatedNews] = useState({
    title: "",
    banner: "",
    text: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setUpdatedNews({ ...updatedNews, [name]: value });
  }

  const token = localStorage.getItem("token");

  function getNewToEdit() {
    fetch(`http://localhost:3000/news/${news.id}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const newToUpdated = {
          title: data.news.title,
          text: data.news.text,
          banner: data.news.banner,
        };

        setUpdatedNews((updatedNews.title = newToUpdated.title));
      })

      .catch((error) => console.log(error.message));
  }

  getNewToEdit();

  function sendUpdatedNews(e) {
    // e.preventDefault();

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
        console.log(data);
        alert(data.message);
        setOpen(false);
      })
      .catch((error) => console.log(error.message));
  }
  // sendUpdatedNews();

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
