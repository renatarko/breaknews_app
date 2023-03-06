import { CardBody, CardContainer, CardFooter } from "./CardStyles";

export function Card({ news }) {
  console.log(news.title);
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
          <cite>{news.user}</cite>
        </div>

        <img src={news.image} alt="imagem" />
      </CardBody>

      <CardFooter>
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <span>{news.likes}</span>
        </div>

        <div>
          <i className="bi bi-chat"></i>
          <span>{news.comments}</span>
        </div>
      </CardFooter>
    </CardContainer>
  );
}
