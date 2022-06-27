import ListPokemons from "./Components/PokemonList";
import { SiPokemon } from "react-icons/si";
export default function App() {
  return (
    <>
      <header className="flex justify-center bg-red-800 h-20" >
      </header>
      <main className="">
        <ListPokemons/>
      </main>
    </>
  );
}
