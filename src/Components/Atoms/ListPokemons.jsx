import React from "react";
import Pokemon from "../Organisms/Pokemon";
import ButtonMore from "./ButtonMore";

export default function ListPokemons({ pokemons, handleMore }) {
  console.log(pokemons);
  return (
    <ul className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full my-10">
      {pokemons.results.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemons={pokemon} />
      ))}
      <ButtonMore handleMore={handleMore} />
    </ul>
  );
}
