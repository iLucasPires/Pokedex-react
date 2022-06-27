import React from "react";

export default function PokemonTypes({ type }) {
  return <div className={`${type} rounded px-4 py-1`}>{type}</div>;
}
