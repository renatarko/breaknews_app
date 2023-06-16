import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { updatedNewsService } from "../../Services/postsServices";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";

export function EditNews({ news, open, setOpen }) {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [updatedNews, setUpdatedNews] = useState({
    title: news?.title,
    banner: news?.banner,
    text: news?.text,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setUpdatedNews({ ...updatedNews, [name]: value });
  }
  // console.log("news", news);

  async function sendUpdatedNews(e) {
    e.preventDefault();

    const newsID = news.id;

    await updatedNewsService(token, updatedNews, newsID);

    setOpen(false);

    navigate(0);
  }

  return (
    <>
      {open ? (
        <Modal>
          <Form title="Atualizar Notícia" handleClick={() => setOpen(!open)}>
            <Input
              type="text"
              placeholder="Título"
              onChange={handleInputChange}
              name="title"
              value={updatedNews.title}
            />
            <Input
              type="text"
              placeholder="Banner"
              onChange={handleInputChange}
              name="banner"
              value={updatedNews.banner}
            />
            <textarea
              onChange={handleInputChange}
              value={updatedNews.text}
              name="text"
              cols="50"
              rows="50"
              placeholder="Texto"
            ></textarea>

            <Button handleClick={sendUpdatedNews}>Atualizar</Button>
          </Form>
        </Modal>
      ) : null}
    </>
  );
}
