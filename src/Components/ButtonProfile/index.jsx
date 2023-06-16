import { LogOut, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import * as S from "./styles";

export const ButtonProfile = ({ username, handleProfile, handleGoOut }) => {
  const [initialName, setInitialName] = useState("");

  useEffect(() => {
    const nameSplit = username.split(" ");
    const initials = nameSplit?.reduce(
      (accumulator, currentName) => accumulator + currentName[0],
      ""
    );
    return setInitialName(initials);
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
