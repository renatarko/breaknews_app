import { ArrowLeftCircle, Plus, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Cards/index";
import { CreateNews } from "../../Components/CreateNews/index";
import { EditUser } from "../../Components/EditUser/index";
import { Empty } from "../../Components/Empty";
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
  const navigate = useNavigate()
  
  useEffect(() => {
    async function getNewsByUser() {
      try {
        const response = await getNewsByUserService(token);
        const {message, results} = await response.json();

        if (message === "Token Invalid!") {
         toast("Sua sessão expirou, faça o login novamente!", { icon: 
          "🕛", style: {background: "rgb(0, 55, 128)", color:"#fff"}});
         return setTimeout(() => {
          navigate("/login")
         }, 3000);
        }

        setNews(results);
      } catch (error) {
        console.log(error);
      }
    }
    getNewsByUser();
  }, []);

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
    <Toaster/>
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
              <Plus color="rgb(0, 55, 128)" />
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
