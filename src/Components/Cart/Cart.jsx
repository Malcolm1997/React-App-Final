import React, { useContext}from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'


const Cart = () => {

    const {cart, removeItem} = useContext(CartContext)



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





        </div>
    )
}

export default Cart
