// Profile: Listar as notícia apenas do usuário logado.

// import { news } from "../../../datas";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../Components/Cards/index";
import { EditUser } from "../../Components/EditUser/index";
import { Navbar } from "../../Components/Navbar/index";
import { NewNews } from "../../Components/NewNews/index";
import { getNewsByUserIdService } from "../../Services/postsServices";
import { getUserService } from "../../Services/userServices";
import { BoxText, ContainerCardProfile, ProfileBody } from "./styles";

export function Profile() {
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState({
    newNews: false,
    editUser: false,
  }); 
  const [message, setMessage] = useState("");

  // pego o id do usuário passado por parametro
  const { id } = useParams();

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function getUser() {
      const response = await getUserService(id)
      await response.json()

      // localStorage.setItem("user", JSON.stringify(user));
    }
    getUser()
  });

  // pega e lista todas as notícias do usuário logado
  useEffect(() => {
    async function getNewsByUser() {
      const response = await getNewsByUserIdService(token)
      const data = await response.json()
      const news = data.results
      setNews(news)

      if(news.length === 0) {
        setMessage("Crie sua primeira notícia!")
      }
    }
    getNewsByUser()
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
              <h1 className="name">{user?.name}</h1>
              <p>@{user?.username}</p>
            </div>

            <button className="createNew" onClick={() => setOpen({ newNews: true })}>
              <i className="bi bi-plus-circle-fill"></i>
            </button>
          </BoxText>
        </ContainerCardProfile>

        {news?.map((item) => (
          <Card key={item.id} news={item} token={token} />
        ))}

        {!!message && <h1>{message}</h1>}
      </ProfileBody>
    </>
  );
}
