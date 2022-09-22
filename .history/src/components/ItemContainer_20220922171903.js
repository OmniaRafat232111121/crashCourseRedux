import React from 'react'
import { buyIceCream,buyCake } from '../redux'

const ItemContainer = () => {
  return (
    <div>
      <h2>Item -{props.i} </h2>
    </div>
  )
}
const mapStateToProps=(state,ownProps)=>{
  const itemState=ownProps.cake? state.cake.numOfCakes: state.IceCream.numOfIceCreams
  return{
    item:itemState
  }

}
const mapDispatchToProps=(dispatch,ownProps)=>{
  const dispatchFunction=ownProps.cake?
  ()=>dispatch(buyCake()):
  ()=>dispatch(buyIceCream())
  return{
    buyItem:dispatchFunction
  }

}
export default connect(mapStateToProps,mapDisparcToProps)(ItemContainer);
