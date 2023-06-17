import { LogOut, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import * as S from "./styles";

export const ButtonProfile = ({ username, handleProfile, handleGoOut }) => {
  const [initialName, setInitialName] = useState("");

  useEffect(() => {
    const nameSeparetor = username.split(" ");
    const initials = nameSeparetor.map((letter) => letter.substr(0, 1));
    return setInitialName(initials[0].concat(initials[1]));
  }, []);

  return (
    <S.Wrapper>
      <S.Dropdown>
        <button className="profile" onClick={handleProfile}>
          <User2 size={20} />
          <span>Perfil</span>
        </button>
        <button className="getOut" onClick={handleGoOut}>
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </S.Dropdown>
      <p className="initialName">{initialName}</p>
    </S.Wrapper>
  );
};
