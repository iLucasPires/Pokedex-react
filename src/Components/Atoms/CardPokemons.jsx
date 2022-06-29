import React from "react";

export default function Card({ pokemonInfo }) {
  return (
    <li
      className={`flex flex-col rounded items-center w-40 md:w-full border-2 ${pokemonInfo.types[0].type.name}`}
    >
      <h2 className="font-bold">{pokemonInfo.name}</h2>
      <img
        className="h-32 block p-2"
        src={pokemonInfo.sprites.other.home.front_default}
        alt={pokemonInfo.name}
      />
      <div className="flex gap-1 w-full bg-white">
        {pokemonInfo.types.map((type) => (
          <div key={type.slot} className="px-3 py-1 w-full rounded text-center">
            {type.type.name}
          </div>
        ))}
      </div>
    </li>
  );
}
