import React from 'react'

import Genre from './genre/genre'
import img from '../../imgs/img16.jpg'

const List = () => {
    const dataFilm = [
        {name:'The Boys' , rate : 8.4 , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' , src : img},
        {name:'Lucifer' , rate : 8.5 , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' , src : img},
        {name:'Kobra Cai' , rate : 8. , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' , src : img},
        {name:'Raised by wolves'  , rate : 7.5 , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' , src : img},
        {name:'The 100' , rate : 7 , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'  , src : img}]

    return <div>
        <Genre dataFilm={dataFilm} title='Top TV pickes for Jack'/>
        <Genre dataFilm={dataFilm} title='Comedy magic'/>
        </div>
}

export default List