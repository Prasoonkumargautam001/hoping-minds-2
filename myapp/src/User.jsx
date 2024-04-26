import React from 'react'

const User = (props) => {
  const {userName, handelRemove} = props
  return (
    <div>
      <p>{userName}</p>
      <button onClick={handelRemove}>Remove</button>
      
    </div>
  )
}

export default User
