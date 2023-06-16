import { ArrowLeftCircle, PlusCircle, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../Components/Cards/index";
import { EditUser } from "../../Components/EditUser/index";
import { NewNews } from "../../Components/NewNews/index";
import { useAuth } from "../../Context/authContext";
import { getNewsByUserService } from "../../Services/postsServices";
import * as S from "./styles";

export function Profile() {
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState({
    newNews: false,
    editUser: false,
  });
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const { user, token } = useAuth();
  // console.log(token);
  // pega e lista todas as notícias do usuário logado
  useEffect(() => {
    async function getNewsByUser() {
      const response = await getNewsByUserService(token);
      const data = await response.json();
      const news = data.results;
      setNews(news);

      if (news?.length === 0) {
        setMessage("Crie sua primeira notícia!");
      }
    }
    getNewsByUser();
    // getInitials(user?.name);
  }, []);

  function getInitials(name) {
    const nameSplit = name.split(" ");
    const initials = nameSplit.reduce(
      (accumulator, currentName) => accumulator + currentName[0],
      ""
    );
    return setUsername(initials);
  }

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

            <S.CreateNews onClick={() => setOpen({ newNews: true })}>
              <PlusCircle size={20} />
              <span>Criar notícia</span>
            </S.CreateNews>
          </S.BoxText>
        </S.ContainerCardProfile>

        {news?.map((item) => (
          <Card key={item.id} news={item} token={token} />
        ))}

        {!!message && <h1>{message}</h1>}
      </S.ProfileBody>
    </>
  );
}
