import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
e