import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSearch } from "../../Context/searchContext";
import { Logo } from "../Logo/index";
import { SignIn } from "../SignIn/index";
import {
  ButtonProfile,
  ButtonS,
  ContainerNav,
  ContainerSearch,
  Nav
} from "./styles";

export function Navbar({ buttonType, user }) {
  const navigate = useNavigate();
  
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


  function moveToProfile() {
    let userID = JSON.parse(localStorage.getItem("user"));
    userID = userID.id;
    navigate(`/breaknews_app/profile/${userID}`);
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

        <Logo/>

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
