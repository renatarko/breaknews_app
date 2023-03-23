import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SignIn } from "../SignIn/SignIn";
import {
  ButtonProfile,
  ButtonS,
  ContainerNav,
  ContainerSearch,
  Logo,
  Nav,
} from "./navbarStyles";

export function Navbar({ buttonType, avatar }) {
  const [sign, setSign] = useState(false); // chama o modal para Login
  const [openNav, setOpenNav] = useState(false); // quando usuario estiver logado, mostrar navbar para perfil ou logout

  const navigate = useNavigate();

  function moveToProfile() {
    navigate(-1);
  }

  function logout() {
    const token = localStorage.getItem("token");

    localStorage.clear(token);
    navigate("/breaknews_app");
  }
  if (sign) {
    return <SignIn />;
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

        <div>
          {buttonType === "userLogout" && (
            <ButtonS type="primary" onClick={() => setSign(!sign)}>
              Entrar
            </ButtonS>
          )}
          {buttonType === "userLogin" && (
            <>
              <ButtonProfile
                src={avatar}
                onClick={() => setOpenNav(!openNav)}
              ></ButtonProfile>
              {openNav ? (
                <ContainerNav className="containerNav">
                  <button className="profile" onClick={moveToProfile}>
                    <i className="bi bi-person"></i>
                    <span>Perfil</span>
                  </button>
                  <button className="getOut" onClick={logout}>
                    <i className="bi bi-box-arrow-left"></i>
                    <span>Sair</span>
                  </button>
                </ContainerNav>
              ) : null}
            </>
          )}
        </div>
      </Nav>
    </>
  );
}
