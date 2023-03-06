import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../../datas";
import { HomeBody } from "./HomeStyles";

export function Home() {
  return (
    <>
      <Navbar />

      <HomeBody>
        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </HomeBody>
    </>
  );
}
