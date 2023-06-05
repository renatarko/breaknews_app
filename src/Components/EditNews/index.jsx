import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatedNewsService } from "../../Services/postsServices";
import { ButtonS } from "../Navbar/styles";
import { FormNewNews } from "../NewNews/styles";
import { InputS, SignInContainer } from "../SignIn/styles";

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

  
  async function sendUpdatedNews(e) {
    e.preventDefault();
    
    const token = localStorage.getItem("token");
    const newsID = news.id;
    
    await updatedNewsService(token, updatedNews, newsID)
    
    setOpen(false);

    navigate(0);
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
