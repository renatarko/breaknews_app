import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [updatedModal, setUpdatedModal] = useState(false);

  return (
    <ModalContext.Provider value={{ updatedModal, setUpdatedModal }}>
      {children}
    </ModalContext.Provider>
  );
};
