import {
  Edit,
  MessageCircle,
  MoreVertical,
  ThumbsUp,
  Trash,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { formatData } from "../../Services/formatDate";
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
  const [openOptions, setOpenOptions] = useState(false);
  const [likes, setLikes] = useState(news.likes || []);
  const [comment, setComment] = useState(news.comments || []);

  const { user, token } = useAuth();

  const liked = useMemo(() => {
    return likes.some((item) => item.userId === user?._id);
  }, [likes]);

  const commented = useMemo(() => {
    return comment.some((item) => item.userId === user?._id);
  }, [comment]);

  async function doLikeNews() {
    if (!token) {
      return toast("Faça o Login para curtir a notícia!", {
        icon: "👍",
        style: {
          backgroundColor: "rgb(6, 72, 158)",
          color: "#fff",
        },
      });
    }

    const userLiked = likes.some((like) => like.userId === user?._id);

    !userLiked
      ? setLikes([...likes, { userId: user?._id }])
      : setLikes(likes.filter((like) => like.userId !== user?._id));

    const newsId = news.id;
    await likeTheNewsService(newsId, token);
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
              {initialName(news.name)}
            </S.ProfileWithoutImage>
          )}

          <div>
            <S.UserName>{news?.name}</S.UserName>
            <S.CreatedAt>há {formatData(news.creatAt)}</S.CreatedAt>
          </div>
        </S.UserData>
        {user?.username === news?.userName && (
          <S.ButtonMenuCard onClick={() => setOpenOptions(!openOptions)}>
            <MoreVertical className="dots" />

            <S.NavCard openOptions={openOptions}>
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

        {news.banner && <S.ImageNews src={news?.banner} alt={news?.title} />}
      </S.CardBody>

      <S.CardFooter>
        <S.ButtonLike onClick={doLikeNews}>
          {liked ? (
            <ThumbsUp color="#003479" fill="#004AAD" size={18} />
          ) : (
            <ThumbsUp color="#757575" size={18} />
          )}
          <span>{likes.length}</span>
        </S.ButtonLike>

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
