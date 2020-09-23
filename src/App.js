import React, { useEffect  } from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Route , Switch} from 'react-router-dom'

import Main from './containers/mainPage'
import Auth from './containers/Auth'
import Select from './containers/Show_movie'
import * as actions from './containers/store/actions'

const App = props => {

  useEffect(() => {
    props.setload(false)
    let topurl = 'https://netflix-myproject.firebaseio.com/top-tvs.json'
    let comedyurl = 'https://netflix-myproject.firebaseio.com/Comedy magic.json'

    fetch( topurl ,{
        method:'GET',
        headers : {'Content-type' :'application/json' }
    }).then(response =>  response.json() )
    .then(data => {
        
        let datalogin = []
        for(let i in data){
            datalogin.push(data[i]) 
        }
        props.setload(true)
        props.seterrorMasage('')
        props.setTopDatefilm(datalogin)}).catch(error => {
            
            props.seterrorMasage('Failed to fetch' )
            props.setload(true)
        })

        fetch( comedyurl ,{
            method:'GET',
            headers : {'Content-type' :'application/json' }
        }).then(response =>  response.json() )
        .then(data => {
            
            let datalogin = []
            for(let i in data){
                datalogin.push(data[i]) 
            }
            props.setload(true)
            props.seterrorMasage('')
            props.setComedyDatefilm(datalogin)}).catch(error => {
                console.log(error)
                props.seterrorMasage('Failed to fetch' )
                props.setload(true)
            })
    } , [])

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path = '/Auth'  component={ Auth }/>
      <Route path = '/Select_movie'  component={ Select }/>
      <Route path = '/' component={ Main }/>
      </Switch>
      
    </div>
    </BrowserRouter>
  )
}

const MapStateToProps = state => {return{
  load : state.detail.load,
  TopdataFilm : state.detail.TopdataFilm,
  ComedydataFilm : state.detail.ComedydataFilm ,
  errorMasage : state.detail.errorMasage
}}

const MapDispatchtoProps = dispatch => {return{
  setload: value => dispatch({type : actions.Load , value : value}) ,
  setTopDatefilm: data => dispatch({type : actions.TopFilm , data:data}) ,
  setComedyDatefilm: data => dispatch({type : actions.ComedyFilm , data:data}) ,
  seterrorMasage: massage => dispatch({type : actions.errorMassage , massage : massage}) 
}}


export default connect(MapStateToProps , MapDispatchtoProps)(App);
