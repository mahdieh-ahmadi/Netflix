import React,{useEffect} from 'react'
import {connect} from 'react-redux'

import NavBar from './nvbar/navbar'
import Banner from './banner/banner'
import List from '../components/list/list'
import './mainpage.css'
import img from '../imgs/img16.jpg'
import * as actions from './store/actions'

const Main = props => {
    useEffect(() => {
        const id = localStorage.getItem('idToken')
        if(id){
            props.switchToLogin(id)
        }
    } , [])

    return <div className='main'>
        <NavBar isSignIn={props.login} src={img} name = 'Mahdie Ahmadi'/>
        <Banner 
        img = {img}
        filmName='narcos' 
        titr='Season 2 now available' 
        paragrapf=' Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt nobis numquam minima saepe et excepturi odio voluptates doloremque,
                est atque!'/>
        <List />
    </div>
}

const mapStateToProps = state => {return{
    login : state.login
}}

const mapDispatchToProps = dispatch => {return{
    switchToLogin : dataLogin => dispatch({type:actions.login , data:dataLogin})
}}



export default connect(mapStateToProps,mapDispatchToProps)(Main)

               