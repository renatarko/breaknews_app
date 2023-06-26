import { Card } from "../../Components/Cards/index";
import { Container, HomeBody } from "./styles";

import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import { ShowMore } from "../../Components/ShowMore";
import { getAllNewsService } from "../../Services/postsServices";
import { CircleLoader } from "react-spinners";

export function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  // Pagination
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [loadingShowMore, setLoadingShowMore] = useState(
    "initial" || "loading"
  );

  useEffect(() => {
    getApi();
  }, [offset]);

  async function getApi() {
    try {
      setLoadingShowMore("loading");
      const response = await getAllNewsService(offset, limit);
      const { results } = await response.json();

      setNews([...news, ...results]);
      setLoadingShowMore("initial");
    } catch (error) {
      console.log(error);
    }
  }

  function showMoreNews() {
    setOffset(offset + limit);
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
            <CircleLoader color="blue" size={16} />
          ) : (
            <ShowMore onClick={showMoreNews} withIcon text="Mostrar mais" />
          ))}
      </Container>
      {/* <Footer /> */}
    </>
  );
}
