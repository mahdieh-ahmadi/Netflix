
import * as actions from './actions'

const initialState = {
    load : false,
    TopdataFilm : [],
    ComedydataFilm : [] ,
    errorMasage : ''
}

const DetailReducer = (state = initialState , action) => {
    switch (action.type) {
        case actions.Load:
            return {...state , load : action.value}
        case actions.ComedyFilm:
            return {...state , ComedydataFilm : action.data}
        case actions.TopFilm:
            return {...state , TopdataFilm : action.data}
        case actions.errorMassage:
            return {...state , errorMasage : action.massage}
        default:
           return state
    }
}

export default DetailReducer