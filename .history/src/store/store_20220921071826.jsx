import {createStore} from'redux';
const initialState={
    counter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                counter:state.counter+1
            }
        case 'DECREMENT':
            return{
 
            }
    }

}
export default createStore(reducers, initialState);