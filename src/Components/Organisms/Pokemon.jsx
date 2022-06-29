import { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "../Atoms/LoadingScreen";
import Card from "../Atoms/CardPokemons";

export default function Pokemon({ pokemons }) {
  const [pokemonInfo, setpokemonInfo] = useState([]);

  const getAswer = async function () {
    const { data } = await axios(pokemons.url);
    setpokemonInfo(data);
  };

  useEffect(function () {
    getAswer();
  }, []);

  if (pokemonInfo == false) {
    return <LoadingScreen />;
  } else return <Card pokemonInfo={pokemonInfo} />;
}
