import "../css/Navbar.css"
import CartWidget from "./CartWidget"
// import logo from '../assets/react.svg'
import { NavLink } from "react-router-dom"
const Navbar = () => {
    return(
        <nav className="nav-container">
            {/* imagen en carpeta public */}
           <NavLink to='/'>
                <img src="../logo-shop.png" alt='logo' style={{width:'8rem'}}/>
            </NavLink>
           {/* imagen dentro de src */}
           {/* <img src={logo} alt='logo'/> */}
            <div className="a-container">
                <NavLink style={{fontWeight:"bold", textDecoration:'none', color:'black'}} to="/category/nuevos">Nuevos</NavLink>
                <NavLink style={{fontWeight:"bold", textDecoration:'none', color:'black'}} to="/category/ofertas">Ofertas</NavLink>
                <NavLink style={{fontWeight:"bold", textDecoration:'none', color:'black'}} to="/category/mas vendidos">Más Vendidos</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar