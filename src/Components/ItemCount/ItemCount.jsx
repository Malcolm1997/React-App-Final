import React , {useState} from 'react'
import './ItemCount.css'


const ItemCount = ({item, show, setShow}) => {


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

            <button className="btnAgregarCarrito" onClick={()=> show ? setShow(false): setShow(true)}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount
