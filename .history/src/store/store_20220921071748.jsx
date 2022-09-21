import {createStore} from'redux';
const initialState={
    counter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                counter:s
            }
    }

}
export default createStore(reducers, initialState);
