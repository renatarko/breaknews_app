import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../../datas";
import { HomeBody } from "./HomeStyles";
import { Footer } from "../../components/Footer/Footer";
import { SignIn } from "../../components/SignIn/SignIn";
import { NewAccount } from "../../components/NewAccount/NewAccount";
import { useEffect, useState } from "react";

export function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results);
      })
      .catch((error) => error.message);
  }, []);

  return (
    <>
      <HomeBody>
        {news.map((item) => {
          return <Card key={item.id} news={item} />;
        })}
      </HomeBody>
      <Footer />
    </>
  );
}
