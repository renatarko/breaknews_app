import { Card } from "../../Components/Cards/index";
import { Container, HomeBody } from "./styles";

import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { ShowMore } from "../../Components/ShowMore";
import { useNews } from "../../Context/newsContext";

export function Home() {
  const { getAllNews, news, offset, setOffset, limit, loading } = useNews();

  const [loadingShowMore, setLoadingShowMore] = useState(
    "initial" || "loading"
  );

  useEffect(() => {
    getAllNews();
  }, [offset]);

  function showMoreNews() {
    setOffset(offset + limit);
  }

  const LoadingStyle = {
    marginTop: "3rem",
  };

  return (
    <>
      <Container>
        <HomeBody handleSearchInput>
          {loading ? (
            <CircleLoader color="blue" cssOverride={LoadingStyle} />
          ) : (
            news?.map((item) => {
              return <Card news={item} key={item.id} />;
            })
          )}
        </HomeBody>

        {!news.length ||
          (offset < news.length &&
            (loadingShowMore === "loading" ? (
              <CircleLoader color="blue" size={16} />
            ) : (
              <ShowMore onClick={showMoreNews} withIcon text="Mostrar mais" />
            )))}
      </Container>
      {/* <Footer /> */}
    </>
  );
}
