import { Card } from "../../Components/Cards/index";
import { Container, HomeBody } from "./styles";

import { useEffect, useState } from "react";
import { Empty } from "../../Components/Empty";
import Loader from "../../Components/Loader";
import { ShowMore } from "../../Components/ShowMore";
import { useSearch } from "../../Context/searchContext";
import {
  getAllNewsService,
  getNewsFromSearchService,
} from "../../Services/postsServices";

export function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  // Pagination
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [loadingShowMore, setLoadingShowMore] = useState(
    "initial" || "loading"
  );

  const { inputSearch } = useSearch("");
  // console.log(inputSearch);

  useEffect(() => {
    getApi();
    // setLoading(true);
  }, [offset]);

  useEffect(() => {
    getNewsFromSearch();
  }, [inputSearch]);

  async function getApi() {
    try {
      setLoadingShowMore("loading");
      const response = await getAllNewsService(offset);
      const { results } = await response.json();

      setNews([...news, ...results]);
      setLoadingShowMore("initial");
    } catch (error) {
      console.log(error);
    }
  }

  async function getNewsFromSearch() {
    try {
      const response = await getNewsFromSearchService(offset);
      const { results } = await response.json();

      if (results) {
        const filterNews = results.filter((item) => {
          return item.text.includes(inputSearch);
        });
        setNews(filterNews);
        console.log(filterNews);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function showMoreNews() {
    setOffset(offset + limit);
    // chamar api com offset e limit atualizados
    // setNews([...news, ...data.results]);
    // setLoadingOnlyArray(true)
    // const response = await getApi(offset);
    // const response = getApi(offset);
    // setNews([...news, ...response.data]);
    // setLoadingOnlyArray(false);
  }

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

        {offset < news.length &&
          (loadingShowMore === "loading" ? (
            <ShowMore onClick={showMoreNews} text="carregando..." />
          ) : (
            <ShowMore onClick={showMoreNews} withIcon text="Mostrar mais" />
          ))}

        {!news.length && <Empty title="Ops, não encontramos nenhuma notícia" />}
      </Container>
      {/* <Footer /> */}
    </>
  );
}
