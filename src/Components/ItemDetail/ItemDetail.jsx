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
            <h4>$ {product.precio}</h4>
            <ItemCount item={product} show={show} setShow={setShow}/>

            {show && <button><Link to={`/cart`}>Finalizar Compra</Link> </button>}

        </div>
    )
}

export default ItemDetail
