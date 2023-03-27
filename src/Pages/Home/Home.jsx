import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
// import { news } from "../../../datas";
import {
  Container,
  HomeBody,
  NextPage,
  Pagination,
  PreviosPage,
} from "./HomeStyles";
import { Footer } from "../../components/Footer/Footer";

import { useEffect, useState } from "react";
import {
  CardBody,
  CardContainer,
  CardFooter,
} from "../../components/Cards/CardStyles";

export function Home() {
  const [news, setNews] = useState([]);

  const [limit, setLimit] = useState(5); // quantidade de resultados por página

  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // qual página está sendo clicada em Pagination

  useEffect(() => {
    fetch(`http://localhost:3000/news?limit=${limit}&offset=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setLimit(data.limit);

        const totalPagina = Math.ceil(data.total / limit);

        const arrayPages = [];
        for (let i = 1; i <= totalPagina; i++) {
          arrayPages.push(i);
        }
        setPages(arrayPages);
        setNews(data.results);
      })
      .catch((error) => error.message);
  }, [currentPage]);

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
        {/* <CardContainer>
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
        </CardContainer> */}

        <HomeBody>
          {news.map((item) => {
            return <Card key={item.id} news={item} token={token} />;
          })}
        </HomeBody>

        <Pagination>
          {currentPage > 1 && (
            <PreviosPage onClick={() => setCurrentPage(currentPage - 1)}>
              <i className="bi bi-caret-left-fill"></i>
            </PreviosPage>
          )}

          {pages.map((page) => {
            return (
              <button
                style={
                  page === currentPage ? { background: "#8dc0ebef" } : null
                }
                key={page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
          {currentPage < pages.length && (
            <NextPage onClick={() => setCurrentPage(currentPage + 1)}>
              <i className="bi bi-caret-right-fill"></i>
            </NextPage>
          )}
        </Pagination>

        {/* <button className="button-showMore">mostrar mais...</button> */}
      </Container>
    </>
  );
}
