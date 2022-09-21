import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userTypes'
export const fetchUsers=()=>{

}
export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess=()=>{
    return{
        type:FETCH_USERS_SUCCESS
    }
}
exp