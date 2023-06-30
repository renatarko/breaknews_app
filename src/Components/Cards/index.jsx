import {
  Edit,
  MessageCircle,
  MoreVertical,
  ThumbsUp,
  Trash,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { initialName } from "../../Services/initialName";
import { likeTheNewsService } from "../../Services/postsServices";
import { Comments } from "../Commets";
import { DeleteNews } from "../DeleteNews/index";
import { EditNews } from "../EditNews/index";

import { useAuth } from "../../Context/authContext";
import * as S from "./styles";

export function Card({ news }) {
  const [open, setOpen] = useState({
    updated: false,
    deleted: false,
    doComments: false,
  });

  const [likes, setLikes] = useState(news.likes || []);
  const [comment, setComment] = useState(news.comments || []);

  const { user, token } = useAuth();

  const liked = useMemo(() => {
    return likes.some((item) => {
      return item.userId === user?._id;
    });
  }, []);

  const commented = useMemo(() => {
    return comment.some((item) => {
      return item.userId === user?._id;
    });
  });

  async function doLikeNews() {
    const newsId = news.id;
    const response = await likeTheNewsService(newsId, token);
    await response.json();

    if (!token) {
      return toast("Faça o Login para curtir a notícia!", {
        icon: "👍",
        style: {
          backgroundColor: "rgb(6, 72, 158)",
          color: "#fff",
        },
      });
    }
    setLikes(likes);
  }
  const { updated, deleted, doComments } = open;

  if (updated) {
    return <EditNews news={news} open={open} setOpen={setOpen} />;
  }

  if (deleted) {
    return <DeleteNews news={news} open={open} setOpen={setOpen} />;
  }

  if (doComments) {
    return <Comments news={news} open={open.doComments} setOpen={setOpen} />;
  }

  return (
    <S.CardContainer>
      <Toaster />

      <S.ContainerProfile>
        <S.UserData>
          {news?.userAvatar ? (
            <S.ProfileImage src={news?.userAvatar} />
          ) : (
            <S.ProfileWithoutImage>
              {initialName(news.userName)}
            </S.ProfileWithoutImage>
          )}

          <div>
            <S.UserName>{news?.name}</S.UserName>
            <S.CreatedAt>Há 2 horas</S.CreatedAt>
          </div>
        </S.UserData>
        {user?.username === news?.userName && (
          <S.ButtonMenuCard>
            <MoreVertical className="dots" />

            <S.NavCard>
              <S.BottonNav onClick={() => setOpen({ updated: true })}>
                <Edit size={18} />
              </S.BottonNav>

              <S.BottonNav onClick={() => setOpen({ deleted: true })}>
                <Trash size={18} />
              </S.BottonNav>
            </S.NavCard>
          </S.ButtonMenuCard>
        )}
      </S.ContainerProfile>

      <S.CardBody>
        <S.Text>
          <h2>{news?.title}</h2>
          <p>{news?.text}</p>
        </S.Text>

        <S.ImageNews
          src={news?.banner ? news?.banner : "../../../images/sem_imagem.png"}
          alt={news?.title}
        />
      </S.CardBody>

      <S.CardFooter>
        <button onClick={doLikeNews}>
          {liked ? (
            <ThumbsUp color="#003479" fill="#004AAD" size={18} />
          ) : (
            <ThumbsUp color="#757575" size={18} />
          )}
          <span>{likes?.length}</span>
        </button>

        <button onClick={() => setOpen({ doComments: true })}>
          {commented ? (
            <MessageCircle color="#003479" fill="#004AAD" size={18} />
          ) : (
            <MessageCircle color="#757575" size={18} />
          )}
          <span>{comment.length}</span>
        </button>
      </S.CardFooter>
    </S.CardContainer>
  );
}
