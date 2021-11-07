import {createContext, useState} from 'react'
import {getFirestore} from '../../services/getFirebase'
import 'firebase/firestore'
import firebase from 'firebase/app'



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

    const crearOrdenDePedido = (orden) =>{

        let precioTotal = 0
        let items = []

        const user = {
            name: 'Malcolm Gibbons',
            phone: 3413223815,
            email: 'malcolm.gibbons1997@gmail.com'
        }

        const itemEnLaOrden = (orden) => {
            cart.map(item => items.push({
                id: item.item.id,
                name: item.item.name,
                price: item.item.price,
            }))
            return items
        }

        const precio = () => {cart.map(item => {
            precioTotal += item.item.price * item.cantidad
            return precioTotal
        })}

        const db = getFirestore();
        const dbOrders = db.collection('ordenes');
        precio()

        dbOrders.add({
            comprador:user,
            item: itemEnLaOrden(orden),
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
            total:precioTotal
        })
        .then( res => alert(`Su orden de compra es: ${res.id}`))
        .catch(err => console.log(err))

        clearCart()
    }


    return <CartContext.Provider value={{ addItem, clearCart, removeItem, cart, crearOrdenDePedido }}>

        {children}

    </CartContext.Provider>
}

export default CartContextProvider