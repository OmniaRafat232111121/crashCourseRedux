import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const HooksCakeContainer = () => {
  const numOfCakes=useSelector(state=>state.numOfCakes)
   const dispatch=useDispatch()
  return (
    <div>
      <h2>Num of Cakes -{numOfCakes}</h2>
      <button onClic>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
