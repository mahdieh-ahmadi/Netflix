import React from 'react'

import Btn from '../../components/buttons/button'
import Logo  from '../../components/logo/logo'
import Input from '../../components/input/input'
import img from  '../../imgs/Logo_Netflix.png'
import './navbar.css'

const NavBar = props => {
    const {isSignIn} = props
    return <nav className='navbar'>
        <div className='logo-img'>
            {/* <Logo title = 'netflix'/> */}
            <img src={img}/>
        </div>
        <div>
        <Btn title = 'Brows' class='navBtn'/>
        {isSignIn ? <Btn title = 'My list' class='navBtn'/> : null}
        <Btn title = 'Top pickes' class='navBtn'/>
        {isSignIn ? <Btn title = 'Recent' class='navBtn'/> :null }
        </div>
        <div className='input_section'>
            <Input />
        </div>
        {isSignIn ? <div> <img src={props.src} alt={props.name}/> {props.name} </div> : 
        <Btn title='Sign in' class = 'redBtn'/>}
        
    </nav>
}

export default NavBar