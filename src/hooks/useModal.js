import { useContext } from "react";
import { ModalContext } from "../context/modalContext";

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal deve ser usado dentro de ModalProvider");
  }

  return context;
};
