import { Button } from "../Button";
import { Logo } from "../Logo";

import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { ButtonProfile } from "../ButtonProfile";
import * as S from "./styles";

export const NavMobile = ({ openMenu, setOpenMenu }) => {
  const navigate = useNavigate();

  const { signOut, user } = useAuth();

  function goToProfile() {
    navigate(`breaknews_app/profile/${user?.username}`);
  }
  return (
    <>
      <S.Wrapper open={openMenu}>
        <X className="btn-close" onClick={() => setOpenMenu(false)} />

        <S.Container>
          <Logo />
        </S.Container>

        {user ? (
          <ButtonProfile
            username={user?.name}
            handleProfile={goToProfile}
            handleGoOut={signOut}
          />
        ) : (
          <Link to="breaknews_app/login">
            <Button handleClick={() => ({})}>Login</Button>
          </Link>
        )}

        <S.Text>A notícia mais perto de você!</S.Text>
      </S.Wrapper>
    </>
  );
};
