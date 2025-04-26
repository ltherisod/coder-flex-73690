import "../css/Navbar.css"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return(
        <nav className="nav-container">
            <h2>Coder Shop</h2>
            <div className="a-container">
                <a style={{fontWeight:"bold", textDecoration:'none', color:'black'}} href="">Nuevos</a>
                <a style={{fontWeight:"bold", textDecoration:'none', color:'black'}} href="">Ofertas</a>
                <a style={{fontWeight:"bold", textDecoration:'none', color:'black'}} href="">Más Vendidos</a>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar