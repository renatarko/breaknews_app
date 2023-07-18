import debounce from "lodash.debounce";
import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSearch } from "../../Context/searchContext";
import { Logo } from "../Logo/index";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../Context/authContext";
import { Button } from "../Button";
import { ButtonProfile } from "../ButtonProfile";
import { NavMobile } from "../NavMobile";
import { SearchNav } from "../Search";
import * as S from "./styles";

export function Navbar() {
  const { setInputSearch } = useSearch();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
    navigate("/search");
  };

  const debounceInputHandleChange = useCallback(
    debounce(handleInputSearch, 1000),
    []
  );

  useEffect(() => {
    return () => {
      debounceInputHandleChange.cancel();
    };
  }, []);

  function moveToProfile() {
    navigate(`/profile`);
  }

  return (
    <>
      <SearchNav onChange={debounceInputHandleChange} />

      <S.Wrapper>
        <S.ContainerSearch>
          <SearchNav onChange={debounceInputHandleChange} />
        </S.ContainerSearch>

        <Logo small />

        {user ? (
          <ButtonProfile
            username={user.name}
            handleProfile={moveToProfile}
            handleGoOut={signOut}
          />
        ) : (
          <Link to="/login">
            <Button>Entrar</Button>
          </Link>
        )}
      </S.Wrapper>
      <S.BtnOpenMenu onClick={() => setOpenMenu(!openMenu)}>
        <Menu className="openMenu" />
      </S.BtnOpenMenu>
      {openMenu && <NavMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </>
  );
}
