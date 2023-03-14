// import { useState } from "react";
// import { CardMenu } from "./CardMenu";
import { useState } from "react";
import { EditNews } from "../EditNews/EditNews";
import { CardBody, CardContainer, CardFooter } from "./CardStyles";

export function Card({ news }) {
  const [openNavCard, setOpenNavCard] = useState(false);
  // console.log(news);

  const [open, setOpen] = useState({
    updated: false,
    deleted: false,
  });

  if (open.updated) {
    return <EditNews />;
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
          <button onClick={() => setOpen(!open.updated)}>
            <i className="bi bi-pencil-square"></i>
            <span>editar</span>
          </button>
          <button onClick={() => setOpen(!open.deleted)}>
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
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{news.likes.length}</span>
        </div>

        <div>
          <i className="bi bi-chat"></i>
          <span>{news.comments.length}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
