import React from 'react'
import CartWitget from '../CartWidget/CartWitget'

const Navbar = () => {
  return (
    <header>
        <h1>Tienda Marolio</h1>

        <nav>
            <ul>
                <li>limpieza</li>
                <li>alimentos</li>
                <li>bebidas</li>
            </ul>
        </nav>
        <CartWitget/>
    </header>
  )
}

export default Navbar