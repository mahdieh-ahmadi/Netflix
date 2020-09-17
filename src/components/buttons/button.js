import React from 'react'

import './buttons.css'

const Btn = props => {
    return <button className={props.class} onClick={props.click}>{props.title}</button>
}

export default Btn