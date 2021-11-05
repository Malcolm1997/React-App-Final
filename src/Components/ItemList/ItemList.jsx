import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Item from '../Item/Item'
import {getFirestore} from '../../services/getFirebase'


const ItemList = () => {
    
    const [prod, setProd] = useState(null)

    const {category} = useParams()


     useEffect(() => {
        const db = getFirestore()

        if(category){
            db.collection('productos').where('category','==', category).get()
            .then(res => setProd(res.docs.map(el => ( { id: el.id , ...el.data() } ) ) ) )
        } else {
            db.collection('productos').get()
            .then(res => setProd(res.docs.map(el => ( { id: el.id , ...el.data() } ) ) ) )
        }
    }, [category]) 

    return (
        <div>
            {prod && prod.map(item => <Item item = {item} key={item.id} />)}
        </div>
    )
}

export default ItemList
