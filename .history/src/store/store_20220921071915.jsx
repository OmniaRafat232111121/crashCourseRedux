import {createStore} from'redux';
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                counter:state.counter+1
            }
        case 'DECREMENT':
            return{
                counter:state.counter-1;
            }
        default:
            return state
    }

}
export default createStore(reducers, initialState);
