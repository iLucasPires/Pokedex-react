import React from "react";
import axios from "axios";
import { SiPokemon, SiSpinrilla } from "react-icons/si";

export default function Card({ pokemons }) {
  const [pokemonCurrent, setPokemonCurrent] = React.useState([]);
  const [color, setColor] = React.useState("");
  const [load, setLoad] = React.useState(false);

  const getAswer = async () => {
    const { data } = await axios(pokemons.url);
    setPokemonCurrent(data);
  };

  React.useEffect(() => {
    getAswer();
  }, []);

  if (!pokemonCurrent || !load) {
    setTimeout(() => setLoad(!load), 2000);
    return (
      <div className="top-0 bottom-0 absolute w-screen bg-red-700 flex flex-col items-center justify-center gap-10">
        <SiSpinrilla className="animate-spin h-32 w-32 fill-white" />
        <h3 className="text-white text-2xl italic">carregando...</h3>
      </div>
    );
  }
  return (
    <li className="bg-slate-500 flex flex-col p-2 rounded items-center w-40 md:w-64 lg:w-80 ">
      <h2 className="font-bold">{pokemonCurrent.name}</h2>
      <img
        className="h-32 block p-2"
        src={pokemonCurrent.sprites.other.home.front_default}
        alt="pokemon"
      />
      <div className="flex gap-1 w-full">
        {pokemonCurrent.types.map(({ type }) => (
          <div className={`${type.name} px-3 py-1 w-full rounded text-center`}>{type.name}</div>
        ))}
      </div>
    </li>
  );
}
