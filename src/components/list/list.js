import React , {useEffect , useState} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../containers/store/actions'

import Genre from './genre/genre'

const List = props => {
    const [load , setload] = useState(false)
    const [dataFilm , setDatefilm] = useState([])
    useEffect(() => {
        let url = 'https://netflix-myproject.firebaseio.com/top-tvs.json'
        fetch( url ,{
            method:'GET',
            headers : {'Content-type' :'application/json' }
        }).then(response =>  response.json() )
        .then(data => {
            let datalogin = []
            for(let i in data){
                datalogin.push(data[i]) 
            }
            setload(true)
            setDatefilm(datalogin)})
    } , [])

        const change = (name , paragraph , titr , src) => {
            props.changeshowFilm(name , paragraph , titr , src)
        }
    
    return <div>
        {load ? <div><Genre dataFilm={dataFilm} title='Top TV pickes for Jack' change={change}/>
        <Genre dataFilm={dataFilm} title='Comedy magic' change={change}/></div> : 
        <p> loading ... </p>}
        
        </div>
}

const MapDispatchtoProps = dispatch => {return{
    changeshowFilm : (name , detail , titr , src) => dispatch({type : actions.showFilm , name : name , detail : detail , titr : titr , src : src})
}}

export default connect(null , MapDispatchtoProps)(List)