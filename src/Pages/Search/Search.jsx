import { useEffect } from "react";
import { useState } from "react";
import { Container, HomeBody } from "../Home/HomeStyles";

export function Search() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // getNewsBySearch();
  }, []);

  function getNewsBySearch() {
    fetch(`http://localhost:3000/news/search`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results);
      })
      .catch((error) => console.log(error));
  }

  // getNewsBySearch();
  console.log(news);
  return (
    <>
      <Container>
        <HomeBody>Search</HomeBody>
      </Container>
    </>
  );
}
