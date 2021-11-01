import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Item from '../Item/Item'


const ItemList = () => {
    
    const [prod, setProd] = useState(null)

    const {category} = useParams()


    const tarea = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            resolve([
                {id: '1', name: 'Coca', precio: 200, description:'Es una gaseosa', category: 'gaseosa', stock:5},
                {id: '2', name: 'Sprite', precio: 150, description:'Es una gaseosa', category: 'gaseosa', stock:9},
                {id: '3', name: 'Vodka', precio: 600, description:'Es una bebida alcholica', category: 'alcohol', stock:5},
                {id: '4', name: 'Fernet', precio: 800, description:'Es una bebida alcholica', category: 'alcohol', stock:9},
                {id: '5', name: 'Speed', precio: 100, description:'Es un energizante', category: 'energizante', stock:15}
            ])
        }, 1500)
        
    })

    useEffect(() => {
        
        tarea.then(res => {
             if(category !== undefined){
                 const result = res.filter(item => item.category === category)
                 setProd(result)
             } else {
                setProd(res)

             }
        })
    }, [category])

    return (
        <div>
            {prod && prod.map(item => <Item item = {item} key={item.id} />)}
        </div>
    )
}

export default ItemList
