import { LogOut, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import { initialName } from "../../Services/initialName";
import * as S from "./styles";

export const ButtonProfile = ({ username, handleProfile, handleGoOut }) => {
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
      <p className="initialName">{initialName(username)}</p>
    </S.Wrapper>
  );
};
