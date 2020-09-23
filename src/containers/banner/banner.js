import React from 'react'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'

import Logo from '../../components/logo/logo'
import Btn from '../../components/buttons/button'
import './banner.css'

const Banner = props => {
    return <div 
    className='film' 
    style={{'backgroundImage' : 
    ` linear-gradient(to bottom , rgba(78, 78, 78, 1) 5%,rgba(77, 77, 77, 0.7), rgba(77, 77, 77, 1)), url(${props.img})  ` ,
    'backgroundPosition' : 'center' , 'backgroundSize': 'cover' , 'backgroundRepeat': 'no-repeat'}}>
        <div className='banner'>
            <Logo title={props.filmName}/>
            <h3 className='header-tird'>{props.titr}</h3>
            <p className='main-paragraph'> {props.paragrapf} </p>
            <div className='btns'>
            <Link to="Select_movie"><Btn title='Watch now' class='border_red_btn'/></Link>
           {props.login ? <Btn title='+ My list' class='border_gray_btn'/> : null}
            </div>
        </div>
    </div>
}

const mapStateToProps = state => {return{
    login : state.login.login
}}

export default connect(mapStateToProps)(Banner)