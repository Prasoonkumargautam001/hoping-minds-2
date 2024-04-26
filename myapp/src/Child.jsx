import React from 'react'
import GrandChild from './GrandChild'
import { ParentContext } from './Parent'

const Child = () => {
  return (
    <div>
      <h2>This is a Child</h2>
      <GrandChild />


    </div>
  )
}

export default Child
