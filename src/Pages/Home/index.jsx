import { Card } from "../../Components/Cards/index";
import {
  Container,
  HomeBody,
  NextPage,
  Pagination,
  PreviosPage,
} from "./styles";

import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import { useSearch } from "../../Context/searchContext";
import { getAllNewsService } from "../../Services/postsServices";

export function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  // Pagination
  const [limit, setLimit] = useState(5 || "");
  const [offset, setOffset] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { inputSearch } = useSearch("");

  useEffect(() => {
    getApi();
    setLoading(true);
  }, [inputSearch]);

  async function getApi() {
    try {
      const response = await getAllNewsService(inputSearch, limit, offset);
      const data = await response.json();

      setLoading(false);
      setNews(data.results);

      const allNews = data.results;

      const filterNews = allNews.filter((item) => {
        const eachText = item.text;
        return eachText?.includes(inputSearch);
      });

      if (filterNews) {
        setNews(filterNews);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function previousNews() {
    setCurrentPage(currentPage - 1);
    setOffset(offset - limit);
  }

  // const token = localStorage.getItem("token");
  const userLogado = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Container>
        <HomeBody handleSearchInput>
          {loading ? (
            <Loader />
          ) : (
            news?.map((item) => {
              return <Card key={item.id} news={item} />;
            })
          )}
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

        {/* {news.length === 0 && <h2>Nenhum resultado foi encontrado...</h2>} */}
      </Container>
      {/* <Footer /> */}
    </>
  );
}
