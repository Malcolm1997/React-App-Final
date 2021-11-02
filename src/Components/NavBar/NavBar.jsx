import React, {/*useContext*/} from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
//import {CartContext} from '../CartContext/CartContext'

const NavBar = () => {

    //const {cart} = useContext(CartContext)

    return (
        <div>
            <nav>
                <ul className="nav">
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={`/category/gaseosa`}>Gaseosa</Link></li>
                    <li><Link to={`/category/energizante`}>Energizante</Link></li>
                    <li><Link to={`/category/alcohol`}>Alcohol</Link></li>
                    <li><Link to={`/cart`}><CartWidget/></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
