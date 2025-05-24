import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
 
  return (
    <>
    <NavbarReactBootstrap/>
    <ItemListContainer greeting="Bienvenidos a mi app!"/>
    <ItemDetailContainer/>
  
    </>
  )
}

export default App
