import React from 'react'

import Film from './film/film'

import './genre.css'

const Genre = props => {
return <div className='genre'>
     <h2 className='genre_header'>{props.title}</h2>
     <div className='genre-list'>
        {props.dataFilm.map(i => {
            return  <Film 
            key = {i.name + Math.random}
            name = {i.name }
            rate={i.rate} 
            paragraph={i.paragraph}
            src={i.src}/>})
        }
     </div>
     </div>
}

export default Genre