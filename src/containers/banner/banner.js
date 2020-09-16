import React from 'react'

import Logo from '../../components/logo/logo'
import Btn from '../../components/buttons/button'
import './banner.css'

const Banner = () => {
    return <div className='banner'>
            <Logo title='narcos'/>
            <h3>Season 2 now available</h3>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt nobis numquam minima saepe et excepturi odio voluptates doloremque,
                est atque! </p>
            <span>
            <Btn title='Watch now'/>
            <Btn title='+ My list'/>
            </span>
        </div>
}

export default Banner