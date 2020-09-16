import React from 'react'

import NavBar from './nvbar/navbar'
import Banner from './banner/banner'
import './mainpage.css'
import img from '../imgs/img16.jpg'

const signin = false
const Main = () => {
    return <div className='main'>
        <NavBar isSignIn={signin} src={img} name = 'Mahdie Ahmadi'/>
        <Banner />
    </div>
}

export default Main