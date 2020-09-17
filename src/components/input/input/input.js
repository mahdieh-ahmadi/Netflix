import React from 'react'

import './input.css'

const Input = props => {
    return <input 
    type={props.type} 
    placeholder={props.placeholder} 
    className='input' 
    onChange={props.Change}/>
}

export default Input