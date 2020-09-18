import React from 'react'


import Film from './film/film'
import * as actions from '../../../containers/store/actions'

import './genre.css'

const Genre = props => {

/* const change = (name , paragraph) => {
    props.changeshowFilm(name , paragraph)
} */

return <div className='genre'>
     <h2 className='genre_header'>{props.title}</h2>
     <div className='genre-list'>
        {props.dataFilm.map(i => {
            return  <Film 
            key = {i.name + Math.random}
            click = {() => props.change(i.name , i.paragraph , i.titr)}
            name = {i.name }
            rate={i.rate} 
            paragraph={i.paragraph}
            src={i.src}/>})
        }
     </div>
     </div>
}

/* const MapStateToprops = state => {return{

}}

const MapDispatchtoProps = dispatch => {return{
    changeshowFilm : (name , detail) => dispatch({type : actions.showFilm , name : name , detail : detail})
}} */

export default Genre