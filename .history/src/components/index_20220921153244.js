//actions

const Actions={
    BUYCAKE:'BUYCAKE'
    ICECREAM:'ICECREAM'
}
function BuyCake(){
    return{
        type:BuyCake,
        data:'First action in redux'
    }
}
function ICECREAM(){
    return{
        type:ICECREAM,
        data:'second action in redux'
    }
}
const initialState={
    numOfCakes:10
    numOfIceCreams:2
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BuyCake:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        default:{
            return state
        }
    }

}