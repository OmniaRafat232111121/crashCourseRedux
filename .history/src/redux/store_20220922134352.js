import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store=createStore(rootReducer,compoapplyMiddleware(logger,thunk))