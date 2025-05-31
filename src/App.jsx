import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Cart from './components/Cart';
//importar el proveedor
import { CartProvider } from './context/CartContext';


function App() {
 
  return (
    <BrowserRouter>
    <CartProvider>
      <NavbarReactBootstrap/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi app!"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
