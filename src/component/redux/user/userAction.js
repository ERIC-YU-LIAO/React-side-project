import {UserType} from './userType'


export const setCurrentUser = user =>({
    type:UserType.SET_CURRENT_USER,
    payload: user
})