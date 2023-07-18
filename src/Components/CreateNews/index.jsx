import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { createNewNewsService } from "../../Services/postsServices";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";
import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";

import { Link, Quote } from "lucide-react";
import { useAuth } from "../../Context/authContext";
import * as S from "./styles";

export function CreateNews({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newNews, setNewNews] = useState({
    title: "",
    banner: "",
    text: "",
  });

  const { token } = useAuth();
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;

    setNewNews({ ...newNews, [name]: value });
  }

  async function createNewNews(e) {
    e.preventDefault();

    const { title, text } = newNews;

    if (!title && !text) {
      setErrorMessage("Preencha os campos");
      return;
    }

    setLoading(true);
    try {
      const response = await createNewNewsService(token, newNews);
      await response.json();

      setLoading(false);
      setOpen(false);
      navigate("/profile");
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open ? (
        <Modal onClick={() => setOpen(false)}>
          <Form title="Publicar Notícia" handleClick={() => setOpen(false)}>
            <Input
              icon={<Quote />}
              type="text"
              placeholder="Título"
              name="title"
              onChange={handleInputChange}
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
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <Button onClick={createNewNews}>
              {loading ? (
                <ClipLoader color="#fff" size={16} />
              ) : (
                "Criar notícia"
              )}
            </Button>
          </Form>
        </Modal>
      ) : null}
    </>
  );
}
