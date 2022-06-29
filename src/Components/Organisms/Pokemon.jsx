import { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "../Atoms/LoadingScreen";
import Card from "../Atoms/CardPokemons";
import Modal from "../Modal/Modal";

export default function Pokemon({ pokemons }) {
  const [pokemonInfo, setpokemonInfo] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  
  const getAswer = async function () {
    const { data } = await axios(pokemons.url);
    setpokemonInfo(data);
  };
  const handleClick = async () => {
    setActiveModal(true);
  };
  useEffect(function () {
    getAswer();
  }, []);

  if (pokemonInfo == false) {
    return <LoadingScreen />;
  } else
    return (
      <>
        <Card onClick={handleClick} pokemonInfo={pokemonInfo} />
        {activeModal && (
          <Modal
            activeModal={activeModal}
            dataModal={pokemonInfo}
            setModal={setActiveModal}
          />
        )}
      </>
    );
}
