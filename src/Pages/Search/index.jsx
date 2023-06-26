import { useEffect, useState } from "react";
import { useSearch } from "../../Context/searchContext";
import { getNewsFromSearchService } from "../../Services/postsServices";
import { Card } from "../../Components/Cards/index";
import { Container } from "../Home/styles";
import { Empty } from "../../Components/Empty";
import { SearchBody } from "./styles";
import { ClipLoader } from "react-spinners";

export function Search() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { inputSearch } = useSearch();

  useEffect(() => {
    getNewsFromSearch();
  }, [inputSearch]);

  async function getNewsFromSearch() {
    setLoading(true);
    try {
      const response = await getNewsFromSearchService(0);
      const { results } = await response.json();

      const regex = new RegExp(inputSearch, "i");
      const filterNews = results.filter((item) => {
        return regex.test(item.title);
      });

      setNews(filterNews);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const override = {
    marginTop: "10rem",
    borderColor: "rgb(0, 74, 173)",
  };

  return (
    <>
      <Container>
        {loading ? (
          <ClipLoader cssOverride={override} />
        ) : (
          <SearchBody>
            {news?.map((item) => {
              return <Card key={item.id} news={item} />;
            })}
          </SearchBody>
        )}

        {news.length === 0 && (
          <>
            <Empty
              small
              title="Ops, não encontramos resultado para sua pesquisa!"
              hasLink
            />
          </>
        )}
      </Container>
    </>
  );
}
