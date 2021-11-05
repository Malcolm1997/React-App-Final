import React from 'react'
import Icon from '../Icon/Icon'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
    return (
        <div>
            <Icon iconoMostrado={faShoppingCart} tamañoDelIcono="2x" />
        </div>
    )
}

export default CartWidget
