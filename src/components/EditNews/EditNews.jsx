import { InputS, SignInContainer } from "../SignIn/SignInStyles";
import { FormNewNews } from "../NewNews/NewNewsStyles";
import { ButtonS } from "../Navbar/navbarStyles";
import { useState } from "react";

export function EditNews() {
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

    const ID = "63bf5c3e8ffe37036d179244";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmY1YmVhOGZmZTM3MDM2ZDE3OTI0MCIsImlhdCI6MTY3ODczNDQwMywiZXhwIjoxNjc4ODIwODAzfQ.G1JTBIEzYbOkOtirDGu14CPNYqEEklDudj_TxFWVFgI";

    fetch(`http://localhost:5000/news/${ID}`, {
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
        // console.log(updatedNews);
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
