import { useContext, useState, createContext } from "react";

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [modalAtive, setModalAtive] = useState(false);
  const [pokemonsInfo, setPokemonsInfo] = useState([]);

  function handleModalAtive() {
    setModalAtive(!modalAtive);
  }

  return (
    <ModalContext.Provider
      value={[handleModalAtive, pokemonsInfo, setPokemonsInfo]}
    >
      {children}
    </ModalContext.Provider>
  );
}
