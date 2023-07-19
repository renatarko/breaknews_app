import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Card } from "../../Components/Cards/index";
import { Empty } from "../../Components/Empty";
import { useSearch } from "../../Context/searchContext";
import { getNewsFromSearchService } from "../../Services/postsServices";
import { Container } from "../Home/styles";
import { SearchBody } from "./styles";

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
      console.log(filterNews);
      if (!filterNews) {
        return <p style={{ marginTop: "5rem" }}>Não encontramos</p>;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (!news.length) {
    return (
      <div style={{ marginTop: "10rem" }}>
        <Empty
          small
          title={`Ops, não encontramos resultado para "${inputSearch}"`}
        />
      </div>
    );
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
      </Container>
    </>
  );
}
