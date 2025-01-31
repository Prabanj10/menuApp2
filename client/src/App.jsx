
import Header from './components/Header'
import Menu from '../pages/Menu'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route} from "react-router";
import CreateMenu from '../pages/CreateMenu';
import CreateMenuItem from '../pages/CreateMenuItem';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element = {<Menu/>} />
    <Route path='/menu/:menuId' element = {<Menu/>} />
    <Route path='/createmenu' element = {<CreateMenu/>}/>
    <Route path='/createmenu/createmenuitem/:menuId' element = {<CreateMenuItem/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App