import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewNewsService } from "../../Services/postsServices";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";

import { Link, Quote } from "lucide-react";
import * as S from "./styles";

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

    // alert(data.message);

    setOpen(false);
    navigate(0);
  }

  return (
    <>
      {open ? (
        <Modal>
          <Form title="Publicar Notícia" handleClick={() => setOpen(false)}>
            <Input
              icon={<Quote />}
              type="text"
              placeholder="Título"
              name="title"
              handleChange={handleInputChange}
            />
            <Input
              icon={<Link />}
              type="text"
              placeholder="Banner"
              name="banner"
              onChange={handleInputChange}
            />
            <S.TextArea
              name="text"
              cols="40"
              rows="5"
              placeholder="Texto"
              onChange={handleInputChange}
            />
            <Button handleClick={createNewNews}>Criar notícia</Button>
          </Form>
        </Modal>
      ) : null}
    </>
  );
}
