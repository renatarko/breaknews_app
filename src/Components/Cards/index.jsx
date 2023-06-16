import {
  Edit,
  MessageCircle,
  MoreVertical,
  ThumbsUp,
  Trash,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
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
    comments: false,
  });

  const [likes, setLikes] = useState(news?.likes || []);
  const [comment, setComment] = useState(news?.comments || []);

  const { user, token } = useAuth();
  const userID = user.id;
  // console.log(userID);

  // const navigate = useNavigate();

  const liked = useMemo(() => {
    return likes.some((item) => item.userId === userID?._id);
  }, []);

  async function doLikeNews() {
    const newsId = news.id;
    const response = await likeTheNewsService(newsId, token);
    await response.json();
    // console.log(data);
    if (!token) {
      return toast("Faça o Login para curtir a notícia!", {
        icon: "👍",
        style: {
          backgroundColor: "#0bade3",
          color: "#fff",
        },
      });
    }

    setLikes(likes);
  }

  // console.log(likes);
  const { updated, deleted, comments } = open;

  if (updated) {
    return <EditNews news={news} open={open} setOpen={setOpen} />;
  }

  if (deleted) {
    return <DeleteNews news={news} open={open} setOpen={setOpen} />;
  }

  if (comments) {
    return <Comments news={news} open={open.comments} setOpen={setOpen} />;
  }

  return (
    <S.CardContainer>
      <Toaster />
      <S.ButtonMenuCard>
        <MoreVertical />

        {/* Menu Card */}
        <S.NavCard>
          <S.BottonNav onClick={() => setOpen({ updated: true })}>
            <Edit size={18} />
          </S.BottonNav>

          <S.BottonNav onClick={() => setOpen({ deleted: true })}>
            <Trash size={18} />
          </S.BottonNav>
        </S.NavCard>
      </S.ButtonMenuCard>

      <S.CardBody>
        <div>
          <h2>{news?.title}</h2>
          <p>{news?.text}</p>
          <cite>{news?.userName}</cite>
        </div>

        <S.ImageNews
          src={news?.banner ? news?.banner : "../../../images/sem_imagem.png"}
          alt="imagem"
        />
      </S.CardBody>

      <S.CardFooter>
        <button onClick={doLikeNews}>
          {liked ? <ThumbsUp /> : <ThumbsUp color="#6b6a6a" />}
          <span>{likes?.length}</span>
        </button>

        <button onClick={() => setOpen({ comments: true })}>
          <MessageCircle color="#757575" />
          <span>{comment.length}</span>
        </button>
      </S.CardFooter>
    </S.CardContainer>
  );
}
