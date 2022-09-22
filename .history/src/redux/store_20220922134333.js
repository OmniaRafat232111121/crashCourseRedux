import { applyMiddleware } from "redux";
import logger from "redux-logger";

const store=createStore(rootReducer,applyMiddleware(logger))