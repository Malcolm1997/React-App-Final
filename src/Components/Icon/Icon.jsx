import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Icon = ( { iconoMostrado, tamañoDelIcono } ) => {
    return (
        <div>
            <FontAwesomeIcon icon={iconoMostrado} size={tamañoDelIcono} />
        </div>
    )
}

export default Icon
