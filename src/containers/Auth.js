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
let name = '';

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

    const nameHandler = event => {
        name = event.target.value
    }

    const Switch = () => {
        setSignup(!signup)
    }

    const btnFun = event => {
        event.preventDefault()
        if(!signup){
            if(name === '' || name === null){
                alert('pleas fill the filed!')
                return
            }
        }
        if(email === "" || email === null || 
        password === "" || password === null) {
            alert('pleas fill the filed!')
            return
        }
        setSpinner(true)
         let AuthinticationData = {
             email : email,
             password : password,
             returnSecureToken : true 
         }

         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrS5L3zA6lFd1bSwYdOZ7JdcDJHFNDyuI' 
         if(!signup){
             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrS5L3zA6lFd1bSwYdOZ7JdcDJHFNDyuI' 
        }

        axios.post(url, AuthinticationData)
        .then( response => {
            if(signup){
               
                let url = `https://netflix-myproject.firebaseio.com/users.json?orderBy="email"&equalTo="${email}"` 
                fetch( url ,{
                    method:'GET',
                    headers : {'Content-type' :'application/json' }
                }).then(response =>  response.json() )
                .then(data => {
                    let datalogin = ''
                    for(let i in data){
                        datalogin = data[i].name
                    }
                    setSpinner(false)
                    setError(false)
                    props.switchToLogin( response.data.idToken  , email , datalogin)
                    props.history.push('/')
                })
            }else{
                let data = {
                    email : email,
                    password : password,
                    name : name
                 }
                axios.post('https://netflix-myproject.firebaseio.com/users.json',data).then(() => {
                    setSpinner(false)
                    setError(false)
                    setSignup(false)
                }).catch(() => {
                    setSpinner(false)
                    setError(true)
                })
            }
        }
        ).catch(() => {
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
            {!signup ? <Input type='text' placeholder = 'Your Name ...' Change={event => nameHandler(event)}/> : null}
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
    switchToLogin : (dataLogin , email , name) => dispatch({type:actions.login , data:dataLogin , email:email , name : name})
}}

export default connect(null,mapDispatchToProps)(Auth)