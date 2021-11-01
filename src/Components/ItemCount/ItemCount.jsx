import React , {useState, useContext} from 'react'
import './ItemCount.css'
import {CartContext} from '../CartContext/CartContext'


const ItemCount = ({item, show, setShow}) => {


    const {addItem} = useContext(CartContext)


    const [contador, setContador] = useState(0)

    const onAdd = () => setContador(contador < item.stock ? contador + 1 : contador)  
    const onRemove = () => setContador(contador > 0 ? contador - 1 : contador)  

    return (
        <div>
            <div className="containerCount">
                <button onClick={onRemove}> - </button>
                <p>{contador}</p>
                <button onClick={onAdd}> + </button>
            </div>

            <button className="btnAgregarCarrito" onClick={() => addItem(item, contador)}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount
