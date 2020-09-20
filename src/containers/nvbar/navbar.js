import React , {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Btn from '../../components/buttons/button'
import Search from '../../components/input/search/search'
import img from  '../../imgs/Logo_Netflix.png'
import './navbar.css'
import * as actions from '../store/actions'

const NavBar = props => {
    const [show , setShow] = useState(false)
    const {isSignIn} = props

    const signout = () => {
        localStorage.removeItem('logindata')
        props.logout() 
    }

    const showNav = () => {
        setShow(!show)
    }




    return <nav className=''>
        <div className='navbar'>

            <div className='logo-img'>
                <img src={img} alt='logo netflix'/>
            </div>
            <div>
            <Btn title = 'Brows' class='navBtn'/>
            {isSignIn ? <Btn title = 'My list' class='navBtn'/> : null}
            <Btn title = 'Top pickes' class='navBtn'/>
            {isSignIn ? <Btn title = 'Logout' class='navBtn' click={signout}/> :null }
            </div>
            <div className='input_section'>
                <Search />
            </div>
            {isSignIn ? <div className='pesonal_img'>{props.name} <img src={props.src} alt={props.name} />  </div> : 
            <Link to='/Auth'><Btn title='Sign in' class = 'redBtn'/></Link>}

        </div>

        <div className='navbar phone_nav'>
            <div className='logo-img'>
                <img src={img} alt='logo netflix'/>
            </div>

            {isSignIn ? <div className='pesonal_img'>{props.name} <img src={props.src} alt={props.name} />  </div> : 
            <Link to='/Auth'><Btn title='Sign in' class = 'redBtn'/></Link>}
            
            <div className='hamberger' onClick={showNav}><div className='hamberger_btn'></div></div>
        </div>

        <div className={show ? 'navbar_phone display' : 'navbar_phone'}>
            <div>
            <Btn title = 'Brows' class='navBtn'/>
            {isSignIn ? <Btn title = 'My list' class='navBtn'/> : null}
            <Btn title = 'Top pickes' class='navBtn'/>
            {isSignIn ? <Btn title = 'Logout' class='navBtn' click={signout}/> :null }
            </div>
            <div className='input_section'>
                <Search />
            </div>
            
        </div>
        
        
    </nav>
}

const mapStateToProps = state => {return{
    login : state.login
}}

const MapDispatchToProps = dispatch => {return{
    logout : () => dispatch({type:actions.logout})
}}

export default connect(mapStateToProps , MapDispatchToProps)(NavBar)