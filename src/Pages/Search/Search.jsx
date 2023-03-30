import { useEffect } from "react";
import { useState } from "react";
import { SearchBody, ErrorMessage } from "./SearchStyles";
import { Container } from "../Home/HomeStyles";
import { Card } from "../../components/Cards/Card";
import { useParams } from "react-router-dom";

export function Search() {
  const [news, setNews] = useState([]);
  // console.log(news);

  const { write } = useParams();
  // console.log(write);

  useEffect(() => {
    getNewsBySearch();
  }, [write]);

  function getNewsBySearch() {
    fetch(`http://localhost:3000/news/search`)
      .then((response) => response.json())
      .then((data) => {
        const allNews = data.results;
        const filterNews = allNews.filter((item) => item.text === write);

        setNews(allNews);

        if (filterNews) {
          setNews(filterNews);
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <Container>
        <SearchBody>
          {news?.map((item) => {
            return <Card key={item.id} news={item} />;
          })}
        </SearchBody>

        {news.length === 0 ? (
          <ErrorMessage>
            😢 Ops, não encontramos resultado para sua pesquisa
          </ErrorMessage>
        ) : null}
      </Container>
    </>
  );
}
