import React, { useContext}from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'


const Cart = () => {

    const {cart, removeItem, clearCart} = useContext(CartContext)

    let totalDeLaCompra = 0

    cart.forEach((el)=> totalDeLaCompra += el.cantidad * el.item.precio)

    return (
        <div>
            <tr>
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Acciones</th>
                <th>Total</th>
            </tr>
            {cart.length !== 0 ? cart.map((el) => {

                return <tr>
                    <td>{el.cantidad}</td>
                    <td>{el.item.name}</td>
                    <td>{el.item.precio}</td>
                    <td><button onClick={()=> removeItem(el.item.id)}>Eliminar item</button></td>
                    <td>{el.item.precio * el.cantidad}</td>
                </tr>
            }) : ( <div>
                        <h2>No hay items</h2>
                        <Link to={"/"}>Seguir Comprando</Link>
                    </div>
                )
            }

            <tr>
                <td></td>
                <td>Total de la compra:</td>
                <td></td>
                <td>{totalDeLaCompra}</td>
                <td></td>
            </tr>

            <button onClick={()=> clearCart()}>Vaciar carro</button>





        </div>
    )
}

export default Cart
