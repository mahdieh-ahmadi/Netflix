import * as actions from './actions'

const initialState = {
    login:false,
    datalogin : '',
    email : '',
    name : '',
    filmDate : {
        name : 'narcos' ,
        titr : 'Season 2 now available',
        detail : " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nesciunt nobis numquam minima saepe et excepturi odio voluptates doloremque,est atque!"
    }
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case actions.login:
            localStorage.setItem('logindata' , JSON.stringify({idToken : action.data , name : action.name })   )
            return{...state , login:true , datalogin : action.data , email : action.email , name : action.name}
        case (actions.logout):
            return{...state , login : false , datalogin : '' , email : '' , name : ''} 
        case (actions.showFilm):
            return{...state , filmDate: {...initialState.filmDate , name:action.name , detail : action.detail , titr : action.titr}}
    
        default:
            return state
    }
}

export default reducer