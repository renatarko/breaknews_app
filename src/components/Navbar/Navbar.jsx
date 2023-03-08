import { useState } from "react";
import { NewAccount } from "../NewAccount/NewAccount";
import { SignIn } from "../SignIn/SignIn";
import { ButtonS, ContainerSearch, Logo, Nav } from "./navbarStyles";

export function Navbar() {
  const [sign, setSign] = useState(false);

  function handleSign() {
    setSign(!sign);
    console.log(sign);
  }
  return (
    <>
      <Nav>
        <ContainerSearch>
          <input type="text" placeholder="Pesquise uma notícia" />
          <i className="bi bi-search"></i>
        </ContainerSearch>

        <Logo>
          <img
            src="https://www.pngkey.com/png/detail/256-2566407_worldwide-news-api-newspaper-logo-design-png.png"
            alt="Logo Breaking News"
          />
          <h2>
            Breaking <br />
            News
          </h2>
        </Logo>

        <ButtonS onClick={handleSign}>Entrar</ButtonS>
      </Nav>
      {sign ? <NewAccount /> : ""}
    </>
  );
}
