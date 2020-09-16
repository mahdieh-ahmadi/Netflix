import React from 'react'

import './film.css'

const Film = props => {
    return <div className='film_item'>
        <div>
            <h2>{props.name}</h2>
            <div>{props.rate} / 10</div>
            <p>{props.paragraph}</p>
        </div>
        <div>
            <img  src={props.src} />
        </div>
    </div>
}

export default Film