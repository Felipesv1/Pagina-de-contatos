import trash from "../../../assets/trash.svg";
import pencil from "../../../assets/pencil.svg";
import add from "../../../assets/add.svg";
import search from "../../../assets/search.svg";
import { useContext } from "react";
import {AuthContext} from '../../../Contexts/Auth'
import {Link} from 'react-router-dom'

export default function Header() {

  const {input,setInput} = useContext(AuthContext)

  return (
    <header className="w-full bg-slate-950">

    <section className=" w-90 max-w-md me-auto ms-auto sm:w-full h-40 flex justify-center  flex-col font-sans bg-slate-950 p-10">
      <div className="w-65 flex justify-between   flex-row  p-5 px-0  ">
        <h2 className=" text-slate-200  font-bold text-xl leading-6 ">
          Meus contatos
        </h2>
        <section className="flex items-start gap-4">
          <Link to='/ContactAdd'>
          <button>
            <img className="w-6 h-6 hover:scale-125 transition-all" src={add} alt="add" />
          </button>
          </Link>
            <Link to='/ContactEdit'>
          <button>
            <img className="w-6 h-6 hover:scale-125 transition-all" src={pencil} alt="pencil" />
          </button>
            </Link>
            <Link to='/Trash'>
          <button>
            <img className="w-6 h-6 hover:scale-125 transition-all" src={trash} alt="trash" />
          </button>
            </Link>
        </section>
      </div>
      <div className="w-90 h-10 focus-within:outline outline-orange-50 border-1 border-gray-50 flex items-center justify-center bg-indigo-900 px-4  py-4 gap-2  rounded-md mb-10">
        <img className="w-4 h-4" src={search} alt="search" />
        <form className="w-full h-7 ">
    <label htmlFor="filter" className="absolute w-1 h-1 p-0 -m-3 overflow-hidden whitespace-nowrap  text-white">Busque por nome ou por dados de contato...</label>
        <input
          className="w-full text-white text-xs bg-transparent outline-none placeholder:text-white"
          type="text"
          id="filter"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Busque por nome ou por dados de contato..."
          />
        </form>
         
      </div>
      
    </section>
    </header>
  );
}
