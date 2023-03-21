// import { useState } from "react";
// import { CardMenu } from "./CardMenu";
import { useEffect, useState } from "react";
import { DeleteNews } from "../DeleteNews/DeleteNews";
import { EditNews } from "../EditNews/EditNews";
import { CardBody, CardContainer, CardFooter } from "./CardStyles";

export function Card({ news, token }) {
  const [openNavCard, setOpenNavCard] = useState(false);
  const newsId = news.id;

  const [open, setOpen] = useState({
    updated: false,
    deleted: false,
  });

  // const [like, setLike] = useState([]);
  const { likes } = news;
  // const [userLike] = likes;
  console.log(likes);

  useEffect(() => {
    doLikeNews();
  });

  function doLikeNews() {
    fetch(`http://localhost:5000/news/like/${news.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(likes),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!token) {
          alert("Ops, faça o login para curtir");
        }

        if (data.message == "Like done successfully") {
          // likes.push(userLike);
          // setLike([...like, userLike]);
          console.log(likes + " curtiu");
        }

        if (data.message == "Like successfully removed") {
          // setLike(like.splice(1, 1));
          console.log(likes + " descurtiu");
        }
      })
      .catch((error) => console.log(error));
  }

  // abrir modal para editar ou deletar noticia
  const { updated, deleted } = open;

  if (updated) {
    return <EditNews newId={newsId} />;
  }

  if (deleted) {
    return <DeleteNews newId={newsId} />;
  }

  return (
    <CardContainer>
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
          <h2>{news.title}</h2>
          <p>{news.text}</p>
          <cite>{news.userName}</cite>
        </div>

        <img src={news.banner} alt="imagem" />
      </CardBody>

      <CardFooter>
        <button onClick={doLikeNews}>
          {likes.length != 0 ? (
            <i className="bi bi-hand-thumbs-up-fill like-fill"></i>
          ) : (
            <i className="bi bi-hand-thumbs-up"></i>
          )}
          <span>{likes.length}</span>
        </button>

        <button>
          <i className="bi bi-chat"></i>
          <span>{news.comments.length}</span>
        </button>
      </CardFooter>
    </CardContainer>
  );
}
