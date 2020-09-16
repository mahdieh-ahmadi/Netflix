import React from 'react'

import NavBar from './nvbar/navbar'
import Banner from './banner/banner'
import './mainpage.css'
import img from '../imgs/img16.jpg'

const signin = false
const Main = () => {
    return <div className='main'>
        <NavBar isSignIn={signin} src={img} name = 'Mahdie Ahmadi'/>
        <Banner 
        img = {img}
        filmName='narcos' 
        titr='Season 2 now available' 
        paragrapf=' Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt nobis numquam minima saepe et excepturi odio voluptates doloremque,
                est atque!'/>
    </div>
}

export default Main

               