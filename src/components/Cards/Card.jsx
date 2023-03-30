import { useEffect, useMemo, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DeleteNews } from "../DeleteNews/DeleteNews";
import { EditNews } from "../EditNews/EditNews";
import { CardBody, CardContainer, CardFooter } from "./CardStyles";

export function Card({ news, token }) {
  const [openNavCard, setOpenNavCard] = useState(false);
  // const newsId = news.id;

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
  // console.log(liked);

  function doLikeNews() {
    fetch(`http://localhost:3000/news/like/${news.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!token) {
          toast("Crie uma conta ou faça o Login para curtir!", {
            icon: "👀",
          });
        }

        setLikes(likes);
      })
      .catch((error) => console.log(error));
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
          <p>{news?.text}</p>
          <cite>{news?.userName}</cite>
        </div>

        <img src={news?.banner} alt="imagem" />
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
