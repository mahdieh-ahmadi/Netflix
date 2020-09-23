import React,{useState , useEffect} from 'react'
import {connect} from 'react-redux'

import * as actions from '../../containers/store/actions'
import Genre from './genre/genre'
import Loading from '../sppiner/sppiner'
import './list.css'

const List = props => {
    const [loading , setLoading] =useState(false)
    useEffect(() => {
        setLoading(props.load)
    } , [props.load])
   


        const change = (name , paragraph , titr , src) => {
            props.changeshowFilm(name , paragraph , titr , src)
        }
    
    return <div>
        {loading ? props.errorMasage === ''  ? 
        <div>
            <Genre dataFilm={props.TopdataFilm} title='Top TV pickes for Jack' change={change}/>
            <Genre dataFilm={props.ComedydataFilm} title='Trending now' change={change}/>
        </div> : <div className='load-box'><p>{props.errorMasage}</p></div> :
        <div className='load-box'><Loading /></div>}

        </div>
}

const MapStateToProps = state => {return{
    load : state.detail.load,
    TopdataFilm : state.detail.TopdataFilm,
    ComedydataFilm : state.detail.ComedydataFilm ,
    errorMasage : state.detail.errorMasage
  }}

const MapDispatchtoProps = dispatch => {return{
    changeshowFilm : (name , detail , titr , src) => dispatch({type : actions.showFilm , name : name , detail : detail , titr : titr , src : src})
}}

export default connect(MapStateToProps , MapDispatchtoProps)(List)