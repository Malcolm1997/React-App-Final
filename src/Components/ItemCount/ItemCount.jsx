import React , {useState} from 'react'
import './ItemCount.css'
import { Link } from 'react-router-dom'


const ItemCount = ({item}) => {


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

            <button className="btnAgregarCarrito"><Link to={`/cart`}>Agregar al carrito</Link> </button>

        </div>
    )
}

export default ItemCount
