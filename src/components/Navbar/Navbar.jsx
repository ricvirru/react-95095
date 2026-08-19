import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="app-navbar">
        <ul className="nav-links">
          <li><a href="#"> Home</a></li>
          <li><a href="#"> Calzado</a></li>
          <li><a href="#"> Ropa</a></li>
          <li><a href="#"> Accesorios</a></li>
          <li><a href="#"> Nosotros</a></li>
          <li><a href="#"> Contacto</a></li>
        </ul>
      </nav>
  );
}

export default Navbar;