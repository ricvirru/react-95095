import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="app-navbar">
        <ul className="nav-links">
          <Link to="/"><li> Home</li></Link>
          <Link to="/products"><li> Productos</li></Link>
          <li><a href="#"> Home</a></li>
          <li><a href="#"> Calzado</a></li>
          <li><a href="#"> Ropa</a></li>
          <li><a href="#"> Accesorios</a></li>
          <li><a href="#"> Nosotros</a></li>
          <Link to="/contact"><li>Contacto</li></Link>
        </ul>
        <div className="app-navbar-widget">
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default Navbar;