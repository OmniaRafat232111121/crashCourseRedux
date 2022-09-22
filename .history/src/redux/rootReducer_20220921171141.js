import { useReducer } from "react";
import { combineReducers } from "redux"; 
import iceCreamReducer from "./iceCream/iceCreamReducer";
const rootReducer=combineReducers({
    user:useReducer,
    iceCream:iceCreamReducer,
    cake:c
})