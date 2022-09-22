import React from 'react'
import { buyIceCream } from '../redux'

const ItemContainer = () => {
  return (
    <div>
      <h2>Item - </h2>
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
  retur

}
export default ItemContainer
