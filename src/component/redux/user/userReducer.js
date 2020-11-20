import {UserType} from './userType'

const { act } = require("react-dom/test-utils")

const INITAL_STATE ={
    currentUser:null,
}

const userReducer = (state = INITAL_STATE,action) =>{
    switch(action.type){
        case UserType.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload
        }
    default:
        return state    
    }
    
}

export default userReducer 