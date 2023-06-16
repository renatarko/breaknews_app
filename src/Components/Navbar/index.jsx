import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Menu } from "lucide-react";
import { useSearch } from "../../Context/searchContext";
import { Logo } from "../Logo/index";

import { useAuth } from "../../Context/authContext";
import { Button } from "../Button";
import { ButtonProfile } from "../ButtonProfile";
import { NavMobile } from "../NavMobile";
import { SearchNav } from "../Search";
import * as S from "./styles";

export function Navbar() {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  const { setInputSearch } = useSearch();
  const { user, signOut } = useAuth();

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
    // const userID = user.id;
    navigate(`/breaknews_app/profile/${user.username}`);
  }

  return (
    <>
      <SearchNav onChange={debounceInputHandleChange} />

      <S.Wrapper>
        <S.ContainerSearch>
          <SearchNav onChange={debounceInputHandleChange} />
        </S.ContainerSearch>

        <Logo />

        {user ? (
          <ButtonProfile
            username={user.name}
            handleProfile={moveToProfile}
            handleGoOut={signOut}
          />
        ) : (
          <Link to="/breaknews_app/login">
            <Button handleClick={() => setSign(!sign)}>Entrar</Button>
          </Link>
        )}
      </S.Wrapper>
      <S.BtnOpenMenu onClick={() => setOpenMenu(!openMenu)}>
        <Menu className="openMenu" onClick={() => setOpenMenu(!openMenu)} />
        {openMenu && (
          <NavMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />
        )}
      </S.BtnOpenMenu>
    </>
  );
}
