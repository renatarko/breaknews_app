import { ArrowLeftCircle, Plus, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Cards/index";
import { CreateNews } from "../../Components/CreateNews/index";
import { EditUser } from "../../Components/EditUser/index";
import { useAuth } from "../../Context/authContext";
import { initialName } from "../../Services/initialName";
import { getNewsByUserService } from "../../Services/postsServices";
import * as S from "./styles";

export function Profile() {
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState({
    newNews: false,
    editUser: false,
  });

  const { user, token } = useAuth();

  useEffect(() => {
    async function getNewsByUser() {
      try {
        const response = await getNewsByUserService(token);
        const { results } = await response.json();

        setNews(results);
      } catch (error) {
        console.log(error);
      }
    }
    getNewsByUser();
  }, [news]);

  if (open.newNews) {
    return <CreateNews open={open.newNews} setOpen={setOpen} />;
  }

  if (open.editUser) {
    return <EditUser open={open.editUser} setOpen={setOpen} />;
  }
  return (
    <>
      <Toaster />
      <S.ProfileBody>
        <S.ContentSettings>
          <S.Settings>
            <Link to="/">
              <ArrowLeftCircle size={24} />
            </Link>
          </S.Settings>

          <S.Settings>
            <UserCog size={24} onClick={() => setOpen({ editUser: true })} />
          </S.Settings>
        </S.ContentSettings>

        <S.ContainerCardProfile>
          {!user?.banner ? (
            <div style={{ background: "rgb(0, 55, 128)", height: "8rem" }} />
          ) : (
            <S.BackgroundImage
              style={{
                backgroundImage: `url(${user?.background})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          )}

          {user?.avatar ? (
            <img
              className="img-profile"
              src={user?.avatar}
              alt="User profile photo"
            />
          ) : (
            <div className="img-profile profile">
              <h1>{initialName(user?.name)}</h1>
            </div>
          )}

          <S.BoxText>
            <div>
              <h1 className="name">{user?.name}</h1>
              <p>{user?.username}</p>
            </div>

            <Button
              title="Adcionar notícia"
              withOutColor
              onClick={() => setOpen({ newNews: true })}
            >
              <Plus size={16} color="rgb(0, 55, 128)" />
              Escrever
            </Button>
          </S.BoxText>
        </S.ContainerCardProfile>

        {news?.length ? (
          news?.map((item) => <Card key={item.id} news={item} />)
        ) : (
          <h1 style={{ textAlign: "end" }}>
            Olá {user?.name}!{" "}
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                color: "rgb(0, 55, 128)",
              }}
              onClick={() => setOpen({ newNews: true })}
            >
              Crie sua primeira notícia
            </button>
          </h1>
        )}
      </S.ProfileBody>
    </>
  );
}
