import * as actions from './actions'

const initialState = {
    login:false
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case actions.login:
            localStorage.setItem('idToken' ,  action.data )
            return{...state , login:true , datalogin : action.data}
        case (actions.logout):
            return{...state , login : false , datalogin : ''}
    
        default:
            return state
    }
}

export default reducer