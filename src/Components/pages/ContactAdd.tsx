import { Link } from "react-router-dom";
import { Rewind, User, Phone } from "@phosphor-icons/react";
import { useState } from "react";
export default function ContactAdd() {
  const [nome, setNome] = useState("");
  const [number, setNumber] = useState<string>("");
  const span = document.querySelector("span") as HTMLSpanElement;

  function Add(nome: string, number: string) {
    number.length < 11 ? span.innerText = '❌ você precisa digitar 11 números':span.innerText = ''
    if (nome !== "" && number.length === 11) {
      alert("Contato Adicionado ✅");
    }
    return (nome = "");
  }
  document.addEventListener("click", (e) => {
    e.preventDefault();
  });
  return (
    <section className="w-full text-white   ">
      <header className="w-90 sm:w-full h-40 flex justify-center  flex-col font-sans bg-slate-950 p-10">
        <section className="w-full max-w-md me-auto ms-auto sm:w-full h-40 flex justify-center  flex-col font-sans bg-slate-950 p-10">
          <div className="w-full flex justify-between  flex-row  p-5 px-0  ">
            <h2 className="text-2xl">Adicionar contato</h2>
            <Link to="/">
              <Rewind className="w-4 h-4 animate-pulse" />
            </Link>
          </div>
        </section>
      </header>
      <main className="w-full h-full  max-w-md me-auto ms-auto sm:w-full  flex justify-center items-center  flex-col font-sans  p-10">
        <form className="flex flex-col justify-center items-center w-full h-80  bg-slate-900">
          <div className=" w-full h-10 focus-within:outline outline-orange-50 border-1 border-gray-50 flex items-center justify-center bg-indigo-900 px-4  py-4 gap-2  rounded-md mb-10">
            <User />
            <input
              type="text"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
              className="w-full text-white text-xs bg-transparent outline-none placeholder:text-white"
              placeholder="Digite o nome ..."
            />
          </div>
          <div className=" w-full h-10 focus-within:outline outline-orange-50 border-1 border-gray-50 flex items-center justify-center bg-indigo-900 px-4  py-4 gap-2  rounded-md mb-10">
            <Phone />
            <input
              type="number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              className="input w-full text-white text-xs bg-transparent outline-none placeholder:text-white"
              placeholder="DDD 00000-0000"
            />
          </div>
          <span className="relative bottom-10 right-15 text-red-700"></span>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={() => Add(nome, number)}
              className="w-full h-10 bg-lime-500 rounded-xl"
            >
              Adicionar
            </button>
          </div>
        </form>
      </main>
    </section>
  );
}
