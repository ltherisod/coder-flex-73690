import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReactIcons';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
  console.log('Soy navbar')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img src='../logo-shop.png' alt='logo' style={{width:'6rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/nuevos'>Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/ofertas'>
               Ofertas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/mas vendidos'>Más Vendidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
       <NavLink to='/cart' style={{textDecoration:'none'}}>
        <CartWidgetReactIcons/>
        </NavLink> 
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;