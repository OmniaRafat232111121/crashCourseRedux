import React from 'react'
import { useSelector } from 'react-redux'
const HooksCakeContainer = () => {
  useSelector(state=>state.numOf)
  return (
    <div>
      <h2>Num of Cakes</h2>
      <button>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
