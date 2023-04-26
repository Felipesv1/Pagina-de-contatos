
import {Rewind} from '@phosphor-icons/react'
import { Link } from "react-router-dom";

function Trash() {
  return <section >
       <header className="text-white w-90 sm:w-full h-40 flex justify-center  flex-col font-sans bg-slate-950 p-10">
        <section className="w-full max-w-md me-auto ms-auto sm:w-full h-40 flex justify-center  flex-col font-sans bg-slate-950 p-10">
          <div className="w-full flex justify-between  flex-row  p-5 px-0  ">
            <h2 className="text-2xl">Lixeira</h2>
            <Link to="/">
              <Rewind className="w-4 h-4 animate-pulse" />
            </Link>
          </div>
        </section>
      </header>
          <div className=' max-w-md me-auto ms-auto text-center w-full h-screen  flex justify-center items-center'>
            <h2 className='text-white text-4xl mb-52'>Lixeira vazia .</h2>
          </div>
  </section>;
}

export default Trash;
