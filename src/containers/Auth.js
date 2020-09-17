import React from 'react'
import {Link} from 'react-router-dom'

import Input from '../components/input/input/input'
import Btn from '../components/buttons/button'

import './Auth.css'

const Auth = () => {
    const btnFun = event => {
        event.preventDefault()
    }

    return <div className='Auth'>
        <form>
        <h2>Login</h2>
            <Input type='email' placeholder = 'User email ...'/>
            <Input type='password' placeholder = 'Password ...'/>
            <span>
                <Link to='/'><Btn title='Cancle' class='border_red_btn'/></Link>
                <Btn title='Sign in' class='border_gray_btn' click={event => btnFun(event)}/>
            </span>
        </form>
    </div>
}

export default Auth