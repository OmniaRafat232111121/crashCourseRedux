import axios from 'axios'
import { FETCH_USERS_REQUEST } from './userTypes'
export const fetchUsers=()=>{

}
export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUsersSucce