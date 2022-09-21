const redux=require('redux')
const createStore=redux.createStore
//actions
const Actions={
    BUYCAKE:'BUYCAKE',
    ICECREAM:'ICECREAM'
}
function BuyCake(){
    return{
        type:BuyCake,
        data:'First action in redux'
    }
}
function BuyICECREAM(){
    return{
        type:ICECREAM,
        data:'second action in redux'
    }
}
const initialState={
    numOfCakes:10,
    numOfIceCreams:20
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BuyCake:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
            case ICECREAM:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
        default:{
            return state
        }
    }

}
const store=createStore(reducer);
console.log('initi')