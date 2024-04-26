import React from 'react'
import { ParentContext } from './Parent'

const GrandChild = () => {
  return (
    <div>
        <ParentContext.Consumer>
            {(value)=> (<h2>This is a text inside grand child with value of {value}</h2>)
            }
        </ParentContext.Consumer>
    </div>
  )
}

export default GrandChild
