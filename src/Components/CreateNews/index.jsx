import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewNewsService } from "../../Services/postsServices";
import { Button } from "../Button";
import { Form } from "../Form";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { ErrorMessage } from "../ErrorMessage";
import { ClipLoader } from "react-spinners";

import { Link, Quote } from "lucide-react";
import * as S from "./styles";
import { useAuth } from "../../Context/authContext";

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
      const response = await createNewNewsService(newNews, token);
      const data = await response.json();
      console.log(data);

      setLoading(false);
      setOpen(false);
      navigate(0);
    } catch (error) {
      console.log(error);
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
