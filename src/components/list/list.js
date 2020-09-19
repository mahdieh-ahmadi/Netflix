import React , {useEffect , useState} from 'react'
import {connect} from 'react-redux'

import * as actions from '../../containers/store/actions'
import Genre from './genre/genre'
import Loading from '../sppiner/sppiner'
import './list.css'

const List = props => {
    const [load , setload] = useState(false)
    const [TopdataFilm , setTopDatefilm] = useState([])
    const [ComedydataFilm , setOmedyDatefilm] = useState([])
    const [errorMasage , seterrorMasage] = useState('')

    useEffect(() => {
        let topurl = 'https://netflix-myproject.firebaseio.com/top-tvs.json'
        let comedyurl = 'https://netflix-myproject.firebaseio.com/Comedy magic.json'

        fetch( topurl ,{
            method:'GET',
            headers : {'Content-type' :'application/json' }
        }).then(response =>  response.json() )
        .then(data => {
            console.log(data)
            let datalogin = []
            for(let i in data){
                datalogin.push(data[i]) 
            }
            setload(true)
            seterrorMasage('')
            setTopDatefilm(datalogin)}).catch(error => {
                console.log(error)
                seterrorMasage('Failed to fetch' )
                setload(true)
            })

            fetch( comedyurl ,{
                method:'GET',
                headers : {'Content-type' :'application/json' }
            }).then(response =>  response.json() )
            .then(data => {
                console.log(data)
                let datalogin = []
                for(let i in data){
                    datalogin.push(data[i]) 
                }
                setload(true)
                seterrorMasage('')
                setOmedyDatefilm(datalogin)}).catch(error => {
                    console.log(error)
                    seterrorMasage('Failed to fetch' )
                    setload(true)
                })
    } , [])

        const change = (name , paragraph , titr , src) => {
            props.changeshowFilm(name , paragraph , titr , src)
        }
    
    return <div>
        {load ? errorMasage === ''  ? <div><Genre dataFilm={TopdataFilm} title='Top TV pickes for Jack' change={change}/>
        <Genre dataFilm={ComedydataFilm} title='Trending now' change={change}/></div> : <div className='load-box'><p>{errorMasage}</p></div> :
        <div className='load-box'><Loading /></div>}

        </div>
}

const MapDispatchtoProps = dispatch => {return{
    changeshowFilm : (name , detail , titr , src) => dispatch({type : actions.showFilm , name : name , detail : detail , titr : titr , src : src})
}}

export default connect(null , MapDispatchtoProps)(List)