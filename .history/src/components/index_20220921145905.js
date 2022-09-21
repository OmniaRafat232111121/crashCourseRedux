//actions

const Actions={
    BUYCAKE:'BUYCAKE'
}
function BuyCake(){
    return{
        type:BuyCake,
        data:'First action in redux'
    }
}
const initialState={
    numOfCakes:10
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