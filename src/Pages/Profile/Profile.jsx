// Profile: Listar as notícia apenas do usuário logado.

// import { news } from "../../../datas";

import { useState, useEffect } from "react";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { NewNews } from "../../components/NewNews/NewNews";
import { BoxText, ContainerCardProfile, ProfileBody } from "./ProfileStyles";

export function Profile() {
  const [news, setNews] = useState([]);
  const [openNewNews, setOpenNewNews] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/news/`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results);
      })
      .catch((error) => error.message);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${userID}`)
      .then((response) => response.json())
      .then((data) => {
        const user = data;

        return localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => error.message);
  }, []);

  const userID = "63bf5bea8ffe37036d179240";

  console.log(localStorage.getItem("token"));
  const userLogado = JSON.parse(localStorage.getItem("user"));
  const { name, username, avatar, background } = userLogado;
  console.log(userLogado);

  // const userID = JSON.parse(localStorage.getItem("userID"));
  // console.log(userID.id);

  function openNewNewsModal(e) {
    e.preventDefault();
    setOpenNewNews(true);
  }

  if (openNewNews) {
    return <NewNews />;
  }

  return (
    <>
      <Navbar />
      <ProfileBody>
        <button>
          <i className="bi bi-arrow-left-circle"></i>
        </button>

        <ContainerCardProfile>
          <div
            className="background"
            style={{ background: background || "gray" }}
          ></div>

          <img
            src={!avatar ? avatar : "https://source.unsplash.com/random"}
            alt="User photo"
          />

          <BoxText>
            <div>
              <h1>{name}</h1>
              <p>@{username}</p>
            </div>

            <button onClick={openNewNewsModal}>
              <i className="bi bi-plus-circle-fill"></i>
            </button>
          </BoxText>
        </ContainerCardProfile>

        {news.map((item) => (
          <Card key={item.id} news={item} />
        ))}
      </ProfileBody>
    </>
  );
}
