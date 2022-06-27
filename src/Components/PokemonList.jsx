import React from "react";
import Card from "./PokemonCard";
import axios from "axios";
import { SiPokemon, SiSpinrilla } from "react-icons/si";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
export default function ListPokemons() {
  const [pokemons, setPokemons] = React.useState([]);

  const getAswer = React.useCallback(async () => {
    const { data } = await axios(url);
    console.log(data);
    setPokemons(data);
  });

  React.useEffect(() => {
    getAswer();
  }, [url]);

  if (!pokemons.results) {
    return <div className="top-0 bottom-0 absolute w-screen bg-slate-400"></div>;
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-5 justify-items-center gap-2 p-5 bg-slate-400">
      {pokemons.results.map((pokemons) => (
        <Card pokemons={pokemons} key={pokemons.name} />
      ))}
      <button className="h-10 bg-yellow-600 w-36 rounded">More</button>
    </ul>
  );
}
