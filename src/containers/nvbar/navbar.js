import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Btn from '../../components/buttons/button'
import Search from '../../components/input/search/search'
import img from  '../../imgs/Logo_Netflix.png'
import './navbar.css'
import * as actions from '../store/actions'

const NavBar = props => {
    const {isSignIn} = props

    const signout = () => {
        localStorage.removeItem('logindata')
        props.logout()
    }


    return <nav className='navbar'>
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
        
    </nav>
}

const mapStateToProps = state => {return{
    login : state.login
}}

const MapDispatchToProps = dispatch => {return{
    logout : () => dispatch({type:actions.logout})
}}

export default connect(mapStateToProps , MapDispatchToProps)(NavBar)