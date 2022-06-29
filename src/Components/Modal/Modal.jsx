import { BsThreeDotsVertical } from "react-icons/bs";

export default function Modal({ activeModal, setModal, dataModal }) {
  function handleOutsideClick({ currentTarget, target }) {
    if (target === currentTarget) setModal(false);
  }

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-10 bg-[#00000066]"
      onClick={handleOutsideClick}
    >
      <div
        className={`md:h-[90vh] md:w-[30vw] w-[90vw] h-[90vh] ${dataModal.types[0].type.name} rounded flex flex-col  items-center transition p-2 border-4`}
      >
        <div className="flex relative h-28 w-full flex-col items-center">
          <p>{dataModal.game_indices[0].game_index}</p>
          <h3 className="text-3xl text-slate-100 font-bold">
            {dataModal.name}
          </h3>
          <img
            className="block h-44 w-44"
            src={dataModal.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <article className="flex flex-col items-center gap-5 w-full">
            <div className="flex items-center gap-2">
              {dataModal.types.map((type) => (
                <span className={`text-white ${type.type.name} px-5 py-1 rounded  `}>
                  {type.type.name}
                </span>
              ))}
            </div>

            <h3 className="font-black">About</h3>
            <ul className="flex justify-around w-full  ">
              <li className="text-center w-1/3 ">
                <div className="font-semibold">9.50 KG</div>
                <div>Heigth</div>
              </li>
              <li className="text-center w-1/3 border-x-2 border-slate-300">
                <div className="font-semibold">1.2 M</div>
                <div>Heigth</div>
              </li>
              <li className="text-center w-1/3">
                <div className="font-semibold">
                  {dataModal.moves[0].move.name}
                </div>
                <div>Lorem, ipsum.</div>
              </li>
            </ul>
          </article>
        </div>
        <div className="bg-slate-100 rounded w-full h-full"></div>
      </div>
    </div>
  );
}
