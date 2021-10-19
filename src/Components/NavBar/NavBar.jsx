import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {

    

    return (
        <div>
            <nav>
                <ul className="nav">
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={`/category/gaseosa`}>Gaseosa</Link></li>
                    <li><Link to={`/category/energizante`}>Energizante</Link></li>
                    <li><Link to={`/category/alcohol`}>Alcohol</Link></li>

                    <CartWidget/>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
