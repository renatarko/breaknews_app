import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../../datas";
import { HomeBody } from "./HomeStyles";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
  return (
    <>
      <Navbar />

      <HomeBody>
        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </HomeBody>
      <Footer />
    </>
  );
}
