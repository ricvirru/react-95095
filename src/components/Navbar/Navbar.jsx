import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="app-navbar">
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end> Inicio</NavLink></li>
          <li><NavLink to="/categories/1" className={({ isActive }) => (isActive ? 'active' : '')}> Hombres</NavLink></li>
          <li><NavLink to="/categories/2" className={({ isActive }) => (isActive ? 'active' : '')}> Mujeres</NavLink></li>
          <li><NavLink to="/categories/3" className={({ isActive }) => (isActive ? 'active' : '')}> Niños</NavLink></li>
          <li><NavLink to="/categories/4" className={({ isActive }) => (isActive ? 'active' : '')}> Outlet</NavLink></li>
        </ul>
        <div className="app-navbar-widget">
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default Navbar;