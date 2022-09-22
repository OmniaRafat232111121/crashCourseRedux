import React from 'react'

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
  const dispatchFunctio

}
export default ItemContainer
