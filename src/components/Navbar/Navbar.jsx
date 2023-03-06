import { Button, ContainerSearch, Logo, Nav } from "./navbarStyles";

export function Navbar() {
  return (
    <>
      <Nav>
        <ContainerSearch>
          <input type="text" placeholder="Pesquise uma notícia" />
          <i className="bi bi-search"></i>
        </ContainerSearch>

        <Logo
          src="https://www.pngkey.com/png/detail/256-2566407_worldwide-news-api-newspaper-logo-design-png.png"
          alt="Logo Breaking News"
        />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
