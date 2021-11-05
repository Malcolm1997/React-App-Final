import {createContext, useState} from 'react'

export const CartContext = createContext()




function CartContextProvider ( {children} ) {

    const [cart, setCart] = useState([])

    const addItem = (nuevoItem, nuevaCantidad, setShow) => {
        
        if(nuevaCantidad !== 0){
            const {cantidad = 0} = cart.find(el => el.item.id === nuevoItem.id) || {}
            const newCart = cart.filter((el) => el.item.id !== nuevoItem.id)
            nuevaCantidad !== 0 && setCart([...newCart, {item:nuevoItem, cantidad: nuevaCantidad + cantidad}]) 
            nuevaCantidad !== 0 && setShow(true)
        }
        
    }

    const clearCart = () => setCart([])

    const removeItem = (itemId) => {
        const newCart = cart.filter( el => el.item.id !== itemId)
        setCart(newCart)
    } 


    return <CartContext.Provider value={{ addItem, clearCart, removeItem, cart }}>

        {children}

    </CartContext.Provider>
}

export default CartContextProvider