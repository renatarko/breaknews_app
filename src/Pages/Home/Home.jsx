import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../../datas";
import { HomeBody } from "./HomeStyles";
import { Footer } from "../../components/Footer/Footer";
import { SignIn } from "../../components/SignIn/SignIn";
import { NewAccount } from "../../components/NewAccount/NewAccount";

export function Home() {
  return (
    <>
      <Navbar />
      {/* <SignIn /> */}
      {/* <NewAccount /> */}
      <HomeBody>
        {news.map((item, index) => (
          <Card key={index} news={item} />
        ))}
      </HomeBody>
      <Footer />
    </>
  );
}
