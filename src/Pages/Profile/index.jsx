import { ArrowLeftCircle, PlusCircle, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Cards/index";
import { EditUser } from "../../Components/EditUser/index";
import { Empty } from "../../Components/Empty";
import { CreateNews } from "../../Components/CreateNews/index";
import { useAuth } from "../../Context/authContext";
import { getNewsByUserService } from "../../Services/postsServices";
import * as S from "./styles";

export function Profile() {
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState({
    newNews: false,
    editUser: false,
  });
  const [username, setUsername] = useState("");

  const { user, token } = useAuth();
  // pega e lista todas as notícias do usuário logado
  useEffect(() => {
    async function getNewsByUser() {
      try {
        const response = await getNewsByUserService(token);
        const data = await response.json();
        const news = data.results;
        setNews(news);
      } catch (error) {
        console.log(error);
      }
    }
    if (user) {
      getInitials(user?.name);
    }
    getNewsByUser();
  }, []);

  async function getInitials(name) {
    const nameSeparetor = name.split(" ");
    const initials = nameSeparetor.map((letter) => letter.substr(0, 1));
    return setUsername(initials[0].concat(initials[1]));
  }

  if (open.newNews) {
    return <CreateNews open={open.newNews} setOpen={setOpen} />;
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
      <S.ProfileBody>
        <S.ContentSettings>
          <S.Settings>
            <Link to="/breaknews_app">
              <ArrowLeftCircle size={24} />
            </Link>
          </S.Settings>

          <S.Settings>
            <UserCog size={24} onClick={() => setOpen({ editUser: true })} />
          </S.Settings>
        </S.ContentSettings>

        <S.ContainerCardProfile>
          <div className="background">
            <img
              className="img-background"
              src={user?.background}
              // alt="background image"
            />
          </div>

          {user?.avatar ? (
            <img
              className="img-profile"
              src={user?.avatar}
              alt="User profile photo"
            />
          ) : (
            <div className="img-profile profile">
              <h1>{username}</h1>
            </div>
          )}

          <S.BoxText>
            <div>
              <h1 className="name">{user?.name}</h1>
              <p>{user?.username}</p>
            </div>

            <Button onClick={() => setOpen({ newNews: true })}>
              <PlusCircle size={20} />
              <span style={{ marginLeft: "0.3rem" }}>Nova notícia</span>
            </Button>
          </S.BoxText>
        </S.ContainerCardProfile>

        {news?.length ? (
          news?.map((item) => <Card key={item.id} news={item} />)
        ) : (
          <Empty title="Você ainda não possui nenhuma notícia" />
        )}
      </S.ProfileBody>
    </>
  );
}
