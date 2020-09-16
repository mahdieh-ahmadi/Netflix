import React from 'react'

import Film from './film/film'
import img from '../../../imgs/img16.jpg'

import './genre.css'

const Genre = () => {
 return <div className='genre'>
     <h2 className='genre_header'>Top TV pickes for Jack</h2>
     <div className='genre-list'>
     <Film 
        name='The Boys' 
        rate='8.4' 
        paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        src={img}/>
        <Film 
        name='Lucifer' 
        rate='8.5' 
        paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        src={img}/>
        <Film 
        name='Kobra Cai' 
        rate='8' 
        paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        src={img}/>
        <Film 
        name='Raised by wolves' 
        rate='7.5' 
        paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        src={img}/>
        <Film 
        name='The 100' 
        rate='7' 
        paragraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        src={img}/>
     </div>
        
     </div>
}

export default Genre