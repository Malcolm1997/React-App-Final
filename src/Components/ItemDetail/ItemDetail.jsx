import React, {useState} from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'



const ItemDetail = ({product}) => {

    const [show, setShow] = useState(false)


    return (
        <div className="productDetail">
            <h2 className="nameProductDetail">{product.name}</h2>
            <p>{product.description}</p>
            <h4>$ {product.price}</h4>
            <ItemCount item={product} show={show} setShow={setShow}/>
            
            <div className="containerAcciones">
                {show && <button className="btnTerminarCompra"><Link to={`/`}>Seguir Comprando</Link> </button>}
                {show && <button className="btnTerminarCompra"><Link to={`/cart`}>Terminar mi Compra</Link> </button>}
            </div>

        </div>
    )
}

export default ItemDetail
