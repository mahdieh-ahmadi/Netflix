import React,{ useState } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'


import Input from '../components/input/input/input'
import Btn from '../components/buttons/button'
import * as actions from '../containers/store/actions'

import './Auth.css'
import Spiner from '../components/sppiner/sppiner'

let email = '';
let password = '';

const Auth = props => {

    const [signup , setSignup] = useState(true) // if true => signin
    const [loading , setSpinner] = useState(false)
    const [error , setError] = useState(false)

    const emailhandler =  event => {
        email = event.target.value
    }

    const passwordHandler = event => {
        password = event.target.value
    }

    const Switch = () => {
        setSignup(!signup)
    }

    const btnFun = event => {
        event.preventDefault()
        if(email === "" || email === null || password === "" || password === null){
            alert('pleas fill the filed!')
            return
        }
        setSpinner(true)
         let data = {
             email : email,
             password : password,
             returnSecureToken : true 
         }

         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrS5L3zA6lFd1bSwYdOZ7JdcDJHFNDyuI' 
         if(!signup){
             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrS5L3zA6lFd1bSwYdOZ7JdcDJHFNDyuI' 
        }

        axios.post(url, data)
        .then( response => {
            setSpinner(false)
            setError(false)
            props.switchToLogin(response.data.idToken)
        
            if(signup){
                props.history.push('/')
            }
        }
        ).catch(errore => {
            setError(true)
            setSpinner(false)
        }
        ) 
    }
    
    return <div className='Auth'>
        {loading ? <div className='spiner'><Spiner /></div>:
        <form>
        <h2 onClick={Switch}>{signup ? 'Switch to signup' : 'Switch to login'}</h2>
        {error ? <p className='error-massage'>error!</p> : null}
            <Input type='email' placeholder = 'Your email ...' Change={event => emailhandler(event)}/>
            <Input type='password' placeholder = 'Password ...' Change={event => passwordHandler(event)}/>
            <span>
                <Link to='/'><Btn title='Cancle' class='border_red_btn'/></Link>
                <Btn title={signup ? 'Sign in' : 'Sign up'} class='border_gray_btn' click={event => btnFun(event)}/>
            </span>
        </form>}
    </div>
}


const mapDispatchToProps = dispatch => {return{
    switchToLogin : dataLogin => dispatch({type:actions.login , data:dataLogin})
}}

export default connect(null,mapDispatchToProps)(Auth)