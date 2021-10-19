import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({product}) => {
    return (
        <div className="productDetail">
            <h2 className="nameProductDetail">{product.name}</h2>
            <p>{product.description}</p>
            <h4>$ {product.precio}</h4>
        </div>
    )
}

export default ItemDetail
