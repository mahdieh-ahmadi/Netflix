import React from 'react'

import './buttons.css'

const Btn = props => {
    return <button className={props.class}>{props.title}</button>
}

export default Btn