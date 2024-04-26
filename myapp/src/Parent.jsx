import React, { createContext } from 'react'
import Child from './Child'
import GrandChild from './GrandChild'
export const  ParentContext = createContext()

const Parent = () => {

  return (
    <div>
      <h2>This is Parent</h2>
      <ParentContext.Provider  value="10">
        <Child/>
      </ParentContext.Provider>


    </div>
  )
}

export default Parent
