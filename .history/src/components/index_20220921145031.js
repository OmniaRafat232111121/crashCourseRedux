const Actions={
    BUY_CAKE:'BUY_CAKE'
}
function Buy
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        default:{
            return state
        }
    }

}