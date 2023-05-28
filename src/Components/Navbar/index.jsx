import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

import { useSearch } from "../../context/searchContext";
import { SignIn } from "../SignIn/SignIn";
import {
  ButtonProfile,
  ButtonS,
  ContainerNav,
  ContainerSearch,
  Logo,
  Nav,
} from "./navbarStyles";

export function Navbar({ buttonType, user }) {
  const [sign, setSign] = useState(false); // chama o modal para Login
  const [openNav, setOpenNav] = useState(false); // quando usuario estiver logado, mostrar navbar para perfil ou logout

  const { setInputSearch } = useSearch();

  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const debounceInputHandleChange = useCallback(
    debounce(handleInputSearch, 500),
    []
  );

  useEffect(() => {
    return () => {
      debounceInputHandleChange.cancel();
    };
  }, []);

  const navigate = useNavigate();

  function moveToProfile() {
    navigate(`/breaknews_app/profile/${user._id}`);
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
          <input
            type="text"
            placeholder="Pesquise uma notícia"
            onChange={debounceInputHandleChange}
          />
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
                src={user?.avatar}
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
