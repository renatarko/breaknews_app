// Profile: Listar as notícia apenas do usuário logado.

// import { news } from "../../../datas";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/Cards/Card";
import { EditUser } from "../../components/EditUser/EditUser";
import { Navbar } from "../../components/Navbar/Navbar";
import { NewNews } from "../../components/NewNews/NewNews";
import { useAuth } from "../../context/authContext";
import { BoxText, ContainerCardProfile, ProfileBody } from "./ProfileStyles";

export function Profile() {
  const [news, setNews] = useState([]); // array das news do usuário logado
  const [open, setOpen] = useState({
    newNews: false,
    editUser: false,
  }); // modal para criar um nova notícia

  // pego o id do usuário passado por parametro
  const { id } = useParams();

  const token = localStorage.getItem("token");

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

  const user = JSON.parse(localStorage.getItem("user"));

  if (open.newNews) {
    return <NewNews open={open.newNews} setOpen={setOpen} token={token} />;
  }

  if (open.editUser) {
    return (
      <EditUser
        open={open.editUser}
        setOpen={setOpen}
        user={user}
        token={token}
      />
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
          <button
            className="editProfile"
            onClick={() => setOpen({ editUser: true })}
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>

        <ContainerCardProfile>
          <div className="background">
            <img
              className="img-background"
              src={user?.background}
              // alt="background image"
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

            <button onClick={() => setOpen({ newNews: true })}>
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
