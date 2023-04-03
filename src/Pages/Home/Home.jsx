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
import { useSearch } from "../../context/searchContext";

export function Home() {
  const [news, setNews] = useState([]);

  // Pagination
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { inputSearch, setInputSearch } = useSearch();

  useEffect(() => {
    fetch(`http://localhost:3000/news?limit=${limit}&offset=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        let totalPage = Math.ceil(data.total / limit);

        const arrayPages = Array.from({ length: totalPage }, () => {
          return totalPage--;
        }).reverse();

        setLimit(data.limit);
        setPages(arrayPages);
        setNews(data.results);
      })
      .catch((error) => error.message);
  }, [currentPage]);

  useEffect(() => {
    getNewsBySearch();
  }, [inputSearch]);

  function getNewsBySearch() {
    fetch(
      `http://localhost:3000/news/search?title=${inputSearch}&limit=${limit}&offset=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        let totalPage = Math.ceil(data.total / limit);

        const arrayPages = Array.from({ length: totalPage }, () => {
          return totalPage--;
        }).reverse();

        setLimit(data.limit);
        setPages(arrayPages);
        setNews(data.results);
        console.log(data.total);
        console.log(news.length);
      })
      .catch((error) => console.log(error));
  }

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
          {news?.map((item) => {
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
