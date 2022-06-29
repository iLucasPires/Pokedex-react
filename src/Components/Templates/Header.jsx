import React from "react";

export default function Header() {
  return (
    <header className="w-screen flex flex-col items-center justify-between gap-2 py-2 bg-slate-100">
      <a className="logo">
        <img
          className="block h-16"
          src="https://store-pokemon.herokuapp.com/static/media/pokemon-logo.4a9e272d7c59d2c5fcdd.png"
          alt=""
        />
      </a>
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-[90%] border-2 rounded p-2" 
      />
    </header>
  );
}
