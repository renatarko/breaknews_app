import { Card } from "../../Components/Cards/index";
import { Container, HomeBody } from "./styles";

import { useCallback, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import { ShowMore } from "../../Components/ShowMore";
import { getAllNewsService } from "../../Services/postsServices";

export function Home() {
  const [news, setNews] = useState([]);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);

  const [loadingShowMore, setLoadingShowMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAllNews = useCallback(
    async (_offset = 0) => {
      try {
        const response = await getAllNewsService(_offset, limit);
        const { results } = await response.json();
        return results;
      } catch (error) {
        console.log(error);
      }
    },
    [offset]
  );

  useEffect(() => {
    initialLoadingNews();
  }, []);

  async function initialLoadingNews() {
    try {
      setLoading(true);
      const _news = await getAllNews();
      setNews([..._news]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const showMoreNews = useCallback(async () => {
    try {
      setOffset(() => offset + limit);
      setLoadingShowMore(true);
      const _news = await getAllNews(offset + limit);
      setNews((prevNews) => [...prevNews, ..._news]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingShowMore(false);
      setLoading(false);
    }
  }, [offset]);

  return (
    <>
      <Container>
        {loading ? (
          <ClipLoader color="#003780" />
        ) : (
          <HomeBody handleSearchInput>
            {news?.map((item) => {
              return <Card news={item} key={item.id} />;
            })}
          </HomeBody>
        )}

        {!news.length ||
          (offset < news.length && (
            <ShowMore
              onClick={showMoreNews}
              withIcon
              text={`${loadingShowMore ? "carregando..." : "Mostrar mais"}`}
            />
          ))}
      </Container>
    </>
  );
}
