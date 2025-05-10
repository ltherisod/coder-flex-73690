import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemCount from './components/ItemCount';
function App() {
 
console.log('Soy App')
  return (
    <>
    <NavbarReactBootstrap/>
    <ItemListContainer greeting="Bienvenidos a mi app!"/>
     {/* <ItemCount stock={12}/> */}
     {/* <ItemCount stock={5}/> */}
    </>
  )
}

export default App
