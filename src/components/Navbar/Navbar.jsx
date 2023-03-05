import "./navbar.css";

export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <input type="text" placeholder="Pesquise uma notícia" />
          <i className="bi bi-search"></i>
        </div>

        <img
          src="https://www.pngkey.com/png/detail/256-2566407_worldwide-news-api-newspaper-logo-design-png.png"
          alt="Logo Breaking News"
        />

        <button>Entrar</button>
      </nav>
    </>
  );
}
