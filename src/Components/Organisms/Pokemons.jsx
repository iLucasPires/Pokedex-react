import { useState, useEffect } from "react";
import LoadingScreen from "../Atoms/LoadingScreen";
import Pokemon from "./Pokemon";
import axios from "axios";
import ListPokemons from "../Atoms/ListPokemons";
import ButtonMore from "../Atoms/ButtonMore";

function AppRest(limit) {
  return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
}

export default function Pokemons() {
  const [limit, setLimit] = useState(0);
  const [pokemonsList, setPokemonsList] = useState([]);

  function handleMore() {
    setLimit((limit) => limit + 20);
  }

  const getAswer = async () => {
    const { data } = await axios(AppRest(limit));
    console.log(data);
    setPokemonsList(data);
  };

  useEffect(() => {
    getAswer();
  }, [limit]);

  if (!pokemonsList.results) {
    return <LoadingScreen />;
  } else
    return (
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-2 w-[90%] my-10">
        {pokemonsList.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemons={pokemon} />
        ))}
        <ButtonMore handleMore={handleMore} />
      </ul>
    );
}
