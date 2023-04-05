// Profile: Listar as notícia apenas do usuário logado.

// import { news } from "../../../datas";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { NewNews } from "../../components/NewNews/NewNews";
import { useAuth } from "../../context/authContext";
import { BoxText, ContainerCardProfile, ProfileBody } from "./ProfileStyles";

export function Profile() {
  const [news, setNews] = useState([]); // array das news do usuário logado
  const [openNewNews, setOpenNewNews] = useState(false); // modal para criar um nova notícia

  // pego o id do usuário passado por parametro
  const { id } = useParams();

  const { user, token } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const user = data;
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => error.message);
  });

  // pega e lista todas as notícias do usuário logado
  useEffect(() => {
    fetch(`http://localhost:3000/news/byUser/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results);
      })
      .catch((error) => console.log(error.message));
  }, []);

  if (openNewNews) {
    return (
      <NewNews open={openNewNews} setOpen={setOpenNewNews} token={token} />
    );
  }

  return (
    <>
      <Navbar buttonType="userLogin" avatar={user?.avatar} />
      <ProfileBody>
        <div className="box-button">
          <Link to="/breaknews_app">
            <i className="bi bi-arrow-left-circle backTo"></i>
          </Link>
          <button className="editProfile">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>

        <ContainerCardProfile>
          <div className="background">
            <img
              className="img-background"
              src={user?.background}
              alt="background image"
            />
          </div>

          <img
            className="img-profile"
            src={user?.avatar}
            alt="User profile photo"
          />

          <BoxText>
            <div>
              <h1>{user?.name}</h1>
              <p>@{user?.username}</p>
            </div>

            <button onClick={() => setOpenNewNews(!openNewNews)}>
              <i className="bi bi-plus-circle-fill"></i>
            </button>
          </BoxText>
        </ContainerCardProfile>

        {news?.map((item) => (
          <Card key={item.id} news={item} token={token} />
        ))}
      </ProfileBody>
    </>
  );
}
