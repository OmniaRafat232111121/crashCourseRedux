import {createStore} from'redux';
const initialState={
    counter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                counter:state.counter
            }
    }

}
export default createStore(reducers, initialState);
