import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useContext}from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import Icon from '../Icon/Icon'
import './Cart.css'


const Cart = () => {

    const {cart, removeItem, clearCart, crearOrdenDePedido} = useContext(CartContext)

    let totalDeLaCompra = 0

    cart.forEach((el)=> totalDeLaCompra += el.cantidad * el.item.price)

    return (
        <div className="cartContainer">
            <table>

                {cart.length !== 0  && (<tr>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                    <th>Total</th>
                </tr>)}
                {cart.length !== 0 ? cart.map((el) => {

                    return <tr>
                        <td>{el.cantidad}</td>
                        <td>{el.item.name}</td>
                        <td>{el.item.price}</td>
                        <td><button onClick={()=> removeItem(el.item.id)}><Icon iconoMostrado={faTrashAlt}   tamañoDelIcono="2x"/></button></td>
                        <td>{el.item.price * el.cantidad}</td>
                    </tr>
                }) : ( <div>
                            <h2>No hay items</h2>
                            <Link to={"/"}>Seguir Comprando</Link>
                        </div>
                    )
                }

                {cart.length !== 0 && <tr>
                    <td></td>
                    <td>Total de la compra:</td>
                    <td></td>
                    <td>{totalDeLaCompra}</td>
                    <td></td>
                </tr>}
                

            </table>

                <div className="opcionesFinales">
                    {cart.length !== 0 && <button onClick={()=> clearCart()}>Vaciar carro</button>}
                    {cart.length !== 0 && <button onClick={()=> crearOrdenDePedido(cart)}>Terminar compra</button>}
                </div>




        </div>
    )
}

export default Cart
