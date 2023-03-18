// import { useState } from "react";
// import { CardMenu } from "./CardMenu";
import { useState } from "react";
import { DeleteNews } from "../DeleteNews/DeleteNews";
import { EditNews } from "../EditNews/EditNews";
import { CardBody, CardContainer, CardFooter } from "./CardStyles";

export function Card({ news, token }) {
  const [openNavCard, setOpenNavCard] = useState(false);
  const newsId = news.id;
  // console.log(token);
  const [open, setOpen] = useState({
    updated: false,
    deleted: false,
  });

  const [like, setLike] = useState([]);

  function doLikeNews() {
    fetch(`http://localhost:5000/news/like/${news.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data);
        setLike(news);
        console.log(like);
      })
      .catch((error) => console.log(error));
  }

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
          {like ? (
            <i className="bi bi-hand-thumbs-up"></i>
          ) : (
            <i className="bi bi-hand-thumbs-up-fill"></i>
          )}
          <span>{like}</span>
        </button>

        <button>
          <i className="bi bi-chat"></i>
          <span>{news.comments.length}</span>
        </button>
      </CardFooter>
    </CardContainer>
  );
}
