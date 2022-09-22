import { useReducer } from "react";
import { combineReducers } from "redux"; 
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
const rootReducer=combineReducers({
    user:useReducer,
    iceCream:iceCreamReducer,
    cake:cakeReducer
})
export default