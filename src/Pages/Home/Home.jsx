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

export function Home() {
  const [news, setNews] = useState([]);

  // Pagination
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/news?limit=${limit}&offset=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setLimit(data.limit);

        let totalPagina = Math.ceil(data.total / limit);

        const arrayPages = Array.from({ length: totalPagina }, () => {
          return totalPagina--;
        }).reverse();

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
      </Container>
      <Footer />
    </>
  );
}
