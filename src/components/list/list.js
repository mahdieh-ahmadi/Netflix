import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../containers/store/actions'

import Genre from './genre/genre'
import img from '../../imgs/img16.jpg'

const List = props => {
    const dataFilm = [
        {name:'The Boys' , rate : 8.4 , titr : 'Season 5 now available' , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' , src : img},
        {name:'Lucifer' , rate : 8.5 , titr : 'Season 7 now available' , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' , src : img},
        {name:'Kobra Cai' , rate : 8. , titr : 'Season 3 now available' , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' , src : img},
        {name:'Raised by wolves'  , titr : 'Season 1 now available' , rate : 7.5 , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' , src : img},
        {name:'The 100' , rate : 7 , titr : 'Season 2 now available' , paragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'  , src : img}]

        const change = (name , paragraph , titr) => {
            props.changeshowFilm(name , paragraph , titr)
        }
    
    return <div>
        <Genre dataFilm={dataFilm} title='Top TV pickes for Jack' change={change}/>
        <Genre dataFilm={dataFilm} title='Comedy magic' change={change}/>
        </div>
}

const MapDispatchtoProps = dispatch => {return{
    changeshowFilm : (name , detail , titr) => dispatch({type : actions.showFilm , name : name , detail : detail , titr : titr})
}}

export default connect(null , MapDispatchtoProps)(List)