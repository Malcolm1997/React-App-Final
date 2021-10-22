import React, {useState} from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({product}) => {

    const [show, setShow] = useState(true)


    return (
        <div className="productDetail">
            <h2 className="nameProductDetail">{product.name}</h2>
            <p>{product.description}</p>
            <h4>$ {product.precio}</h4>
            {show && <ItemCount item={product} />}

            <button onClick={()=> show ? setShow(false): setShow(true)}>Finalizar Compra</button>

        </div>
    )
}

export default ItemDetail
