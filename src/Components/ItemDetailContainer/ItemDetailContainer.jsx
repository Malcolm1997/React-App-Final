import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({item}) => {

    const {name} = useParams()


    const product = item.find( items => items.name === name)



    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer
