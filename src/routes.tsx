import Home from './Components/Home/Home'
import ContactAdd from './Components/pages/ContactAdd'
import ContactEdit from './Components/pages/ContactEdit'
import Trash from './Components/pages/Trash'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
export default function Rotas(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/ContactAdd' element={<ContactAdd/>}/>
                <Route path='/ContactEdit' element={<ContactEdit/>}/>
                <Route path='/Trash' element={<Trash/>}/>
            </Routes>
        </Router>
    )
}