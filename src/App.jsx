import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
// import FetchCountries from './components/ejemplos/FetchCountries';
import FetchApi from './components/ejemplos/FetchApi';
import { withLogging } from './hocs/withLogging';
import MiComponente from './components/ejemplos/MiComponente';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 
console.log('Soy App')
const MiComponenteConLogging = withLogging(MiComponente)
const ItemListConHoc = withLogging(ItemListContainer)
  return (
    <>
    <NavbarReactBootstrap/>
    {/* <FetchCountries/> */}
    {/* <FetchApi/> */}
    {/* <ItemListContainer greeting="Bienvenidos a mi app!"/> */}
    <ItemDetailContainer/>
    {/* <MiComponente mensaje='Hola chicos!'/> */}
    {/* <MiComponenteConLogging mensaje='Tengo una nueva funcionalidad'/> */}
    {/* <ItemListConHoc greeting="Bienvenidos a mi app con hocs!"/> */}
    </>
  )
}

export default App
