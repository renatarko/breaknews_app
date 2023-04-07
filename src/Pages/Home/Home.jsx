import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  Container,
  ErrorNotFound,
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
  const [limit, setLimit] = useState(5 || "");
  const [offset, setOffset] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { inputSearch } = useSearch("");

  useEffect(() => {
    getApi();
  }, [inputSearch, currentPage]);

  async function getApi() {
    try {
      const response = await fetch(
        `http://localhost:3000/news/search?title=${inputSearch}&limit=${limit}&offset=${offset}`
      );
      const data = await response.json();

      let totalPage = Math.ceil(data.total / limit);

      const arrayPages = Array.from({ length: totalPage }, () => {
        return totalPage--;
      }).reverse();

      setLimit(data.limit);
      setPages(arrayPages);
      setNews(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  function previousNews() {
    setCurrentPage(currentPage - 1);
    setOffset(offset - limit);
  }

  const token = localStorage.getItem("token");
  const userLogado = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {token ? (
        <Navbar buttonType="userLogin" user={userLogado} />
      ) : (
        <Navbar buttonType="userLogout" />
      )}
      <Container>
        <HomeBody handleSearchInput>
          {news?.map((item) => {
            return <Card key={item.id} news={item} token={token} />;
          })}
        </HomeBody>

        <Pagination>
          {currentPage > 1 && (
            <PreviosPage onClick={previousNews}>
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

        {news.length === 0 ? (
          <ErrorNotFound>
            😢 Ops, não encontramos resultado para sua pesquisa
          </ErrorNotFound>
        ) : null}
      </Container>
      <Footer />
    </>
  );
}
