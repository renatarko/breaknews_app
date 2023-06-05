import { useMemo, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { likeTheNewsService } from "../../Services/postsServices";
import { DeleteNews } from "../DeleteNews/index";
import { EditNews } from "../EditNews/index";
import { CardBody, CardContainer, CardFooter } from "./styles";

export function Card({ news, token }) {
  const [openNavCard, setOpenNavCard] = useState(false);

  const [open, setOpen] = useState({
    updated: false,
    deleted: false,
  });

  const [likes, setLikes] = useState(news?.likes || []);

  const userID = JSON.parse(localStorage.getItem("user"));
  // console.log(userID);

  // const navigate = useNavigate();

  const liked = useMemo(() => {
    return likes.some((item) => item.userId === userID?._id);
  }, []);

  async function doLikeNews() {
    const newsId = news.id;
    const response = await likeTheNewsService(newsId, token)
    const data = await response.json()
    
    if (!token) {
      return toast.error("Você precisa estar logado para curtir uma notícia!"); 
    }
  
    setLikes(likes);
  }

  // abrir modal para editar ou deletar noticia
  const { updated, deleted } = open;

  if (updated) {
    return <EditNews news={news} open={open} setOpen={setOpen} />;
  }

  if (deleted) {
    return <DeleteNews news={news} open={open} setOpen={setOpen} />;
  }

  return (
    <CardContainer>
      <Toaster />
      <button
        className="icon-dotsmenu"
        onClick={() => setOpenNavCard(!openNavCard)}
      >
        <i className="bi bi-three-dots-vertical"></i>
      </button>

      {openNavCard ? (
        <nav className="navMenuDots">
          <button onClick={() => setOpen({ updated: true })}>
            <i className="bi bi-pencil-square"></i>
            <span>editar</span>
          </button>

          <button onClick={() => setOpen({ deleted: true })}>
            <i className="bi bi-trash-fill"></i>
            <span>apagar</span>
          </button>
        </nav>
      ) : null}

      <CardBody>
        <div>
          <h2>{news?.title}</h2>
          <p>{news?.text.substring(0, 115).concat("...")}</p>
          <cite>{news?.userName}</cite>
        </div>

   <img src={!news?.banner ? news?.banner : "../../../images/sem_imagem.png"} alt="imagem" />  
       
  
      </CardBody>

      <CardFooter>
        <button onClick={doLikeNews}>
          {liked ? (
            <i className="bi bi-hand-thumbs-up-fill like-fill"></i>
          ) : (
            <i className="bi bi-hand-thumbs-up"></i>
          )}
          <span>1</span>
        </button>

        <button>
          <i className="bi bi-chat"></i>
          <span>1</span>
        </button>
      </CardFooter>
    </CardContainer>
  );
}
