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
        const id = JSON.parse(localStorage.getItem('logindata'))
        if(id){
            props.switchToLogin(id , props.email , id.name)
        }
    } , [])

    return <div className='main'>
        <NavBar isSignIn={props.login} src={img} name = {props.name}/>
        <Banner 
        img = {props.dataFilm.addres}
        filmName = {props.dataFilm.name} 
        titr = {props.dataFilm.titr}
        paragrapf={ props.dataFilm.detail}/>
        <List />
    </div>
}

const mapStateToProps = state => {return{
    login : state.login,
    email : state.email,
    name : state.name,
    dataFilm : state.filmDate
}}

const mapDispatchToProps = dispatch => {return{
    switchToLogin : (dataLogin , email , name) => dispatch({type:actions.login , data:dataLogin , email : email , name : name})
}}



export default connect(mapStateToProps,mapDispatchToProps)(Main)

               