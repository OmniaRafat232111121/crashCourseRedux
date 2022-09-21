import {createStore} from'redux';
const initialState={
    counter:0
}
export default createStore(reducers, initialState);
