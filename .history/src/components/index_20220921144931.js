const Actions={
    BUY_CAKE:'BUY_CAKE'
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state
            }
    }

}