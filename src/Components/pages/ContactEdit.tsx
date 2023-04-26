import { Link } from "react-router-dom";
import { Rewind, User } from "@phosphor-icons/react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";
import { contatos } from "../../Contatos/contatos";
export default function ContactAdd() {
  const { input, setInput } = useContext(AuthContext);
  const contatosFiltered = contatos.filter((contact) =>
    contact.nome.toLowerCase().includes(input.toLowerCase())
  );
  return (
    <section className="w-full text-white   ">
      <header className="w-90 sm:w-full h-40 flex justify-center  flex-col font-sans bg-slate-950 p-10">
        <section className="w-full max-w-md me-auto ms-auto sm:w-full h-40 flex justify-center  flex-col font-sans bg-slate-950 p-10">
          <div className="w-full flex justify-between  flex-row  p-5 px-0  ">
            <h2 className="text-2xl">Editar contato</h2>
            <Link to="/">
              <Rewind className="w-4 h-4 animate-pulse" />
            </Link>
          </div>
        </section>
      </header>
      <main className="w-full h-full  max-w-lg me-auto ms-auto sm:w-full  flex justify-center items-center  flex-col font-sans  p-10">
        <div className=" w-full h-10 focus-within:outline outline-orange-50 border-1 border-gray-50 flex items-center justify-center bg-indigo-900 px-4  py-4 gap-2  rounded-md mb-10">
          <User />
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="w-full text-white text-xs bg-transparent outline-none placeholder:text-white"
            placeholder="Digite o nome ..."
          />
        </div>
        <section className="w-full  contacts flex flex-col ">
          {contatosFiltered.map((item) => (
            <div
              key={item.key}
              className="w-full h-full flex justify-between mb-20 "
            >
              <section className="w-full flex justify-center items-center p-0 gap-4 mr-7 cursor-pointer ">
                <img
                  className="object-cover w-12 h-12 rounded-full shadow shadow-slate-800"
                  src={item.img}
                  alt="perfil"
                />

                <div>
                  <h4 className=" font-bold">{item.nome}</h4>
                </div>
                <div className="w-44 flex justify-center items-center">
                  <button className="w-full h-10 bg-lime-500 rounded-xl hover:bg-lime-700 transition-all">
                    Editar
                  </button>
                </div>
              </section>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
}
