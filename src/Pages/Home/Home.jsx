import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
// import { news } from "../../../datas";
import { Container, HomeBody } from "./HomeStyles";
import { Footer } from "../../components/Footer/Footer";

import { useEffect, useState } from "react";
import {
  CardBody,
  CardContainer,
  CardFooter,
} from "../../components/Cards/CardStyles";

export function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results);
      })
      .catch((error) => error.message);
  }, []);

  const token = localStorage.getItem("token");
  const userLogado = localStorage.getItem("user");

  return (
    <>
      {token ? (
        <Navbar buttonType="userLogin" avatar={userLogado?.avatar} />
      ) : (
        <Navbar buttonType="userLogout" />
      )}
      <Container>
        <CardContainer>
          <CardBody>
            <div>
              <h2>titulo</h2>
              <p>text</p>
              <cite>username</cite>
            </div>

            <img src="" alt="imagem" />
          </CardBody>

          <CardFooter>
            <button>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>1</span>
            </button>
            <button>
              <i className="bi bi-chat"></i>
              <span>1</span>
            </button>
          </CardFooter>
        </CardContainer>

        <HomeBody>
          {news.map((item) => {
            return <Card key={item.id} news={item} token={token} />;
          })}
        </HomeBody>
        <button className="button-showMore">mostrar mais...</button>
        {/* <Footer /> */}
      </Container>
    </>
  );
}
