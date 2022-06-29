import Pokemons from "./Components/Organisms/Pokemons";
import Footer from "./Components/Templates/Footer";
import Header from "./Components/Templates/Header";
import ModalContextProvider from "./Context/ModalContext"
export default function App() {
  return (
    <>
      <ModalContextProvider>
        <Header />
        <main className="flex justify-center bg-slate-100">
          <Pokemons />
        </main>
        <Footer />
      </ModalContextProvider>
    </>
  );
}
