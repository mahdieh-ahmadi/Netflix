import React from 'react'

import './logo.css'

const Logo  = props => {
    return <span className='logo'>
        {props.title}
    </span>
}

export default Logo