import {useContext, createContext} from 'react'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)



function CartContextProvider ( {children} ) {



    const addItem = () => console.log('Hola');

    return <CartContext.Provider value={{ addItem }}>

        {children}

    </CartContext.Provider>
}

export default CartContextProvider