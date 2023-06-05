import { useEffect, useState } from "react";
import { Card } from "../../Components/Cards/index";
import { useSearch } from "../../Context/searchContext";
import { getNNewsBySearchService } from "../../Services/postsServices";
import { Container } from "../Home/styles";
import { ErrorMessage, SearchBody } from "./styles";

export function Search() {
  const [news, setNews] = useState([]);

  const { inputSearch } = useSearch();
  console.log(inputSearch);

  useEffect(() => {
    getNewsBySearch();
  }, [inputSearch]);

  async function getNewsBySearch() {
    const response = await getNNewsBySearchService()
    const data = await response.json()
    
    const allNews = data.results;

    const filterNews = allNews.filter((item) => {
      const eachText = item.text;
      const searchWord = inputSearch;
      return eachText.includes(searchWord);
    })

    if(filterNews) {
      setNews(filterNews);
    }
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
