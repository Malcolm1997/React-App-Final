import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./Item.css"

const Item = ({item}) => {
    return (
        <div className="itemCont">
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            
            <Link to={`/productos/${item.name}`}>Ver mas</Link>
        </div>
    )
}

export default Item
