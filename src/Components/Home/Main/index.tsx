import { contatos } from "../../../Contatos/contatos";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth";
export default function Main() {
  const { input } = useContext(AuthContext);

  const contatosFiltered = contatos.filter((contact) =>
    contact.nome.toLowerCase().includes(input.toLowerCase()) || contact.telefone.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <main className="w-full bg-slate-900">

    <section className="w-full  contacts max-w-md me-auto ms-auto flex flex-col justify-between bg-slate-900 text-white p-10 font-sans  ">
      
      {input === " "
        ? contatos.map((item) => (
            <div
              key={item.key}
              className="w-full h-screen flex justify-between  flex-row mb-20 "
            >
              <p
                className={` w-10 h-10 ${item.color}  flex items-center justify-center rounded-lg`}
              >
                {item.key}
              </p>
              <section className=" flex  w-48 p-0 gap-4 mr-7  ">
                <img
                  className="object-cover w-12 h-12 rounded-full shadow shadow-slate-800 "
                  src={item.img}
                  alt="foto perfil"
                />

                <div>
                  <h4 className=" font-bold">{item.nome}</h4>

                  <p className="text-slate-500">{item.telefone}</p>
                </div>
              </section>
            </div>
          ))
        : contatosFiltered.map((item) => (
            <div
              key={item.key}
              className="w-full h-full flex justify-between  flex-row mb-20 "
            >
              <p
                className={` w-10 h-10 ${item.color} flex items-center justify-center rounded-lg`}
              >
                {item.key}
              </p>
              <section className="flex  w-48 p-0 gap-4 mr-7 cursor-pointer hover:scale-110 transition-all">
                <img
                  className="object-cover w-12 h-12 rounded-full shadow shadow-slate-800"
                  src={item.img}
                  alt="perfil"
                />

                <div>
                  <h4 className=" font-bold">{item.nome}</h4>

                  <p className="text-slate-500">{item.telefone}</p>
                </div>
              </section>
            </div>
          ))}
    </section>
    </main>
  );
}
