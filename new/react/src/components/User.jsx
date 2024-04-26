import React from 'react'

const User = ({ Image ,name, nickName}) => {
  return (
    <div>
        
{     <img src={Image} alt="" />|| <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
Sorry, your browser does not support inline SVG.
</svg> }
      <h2>{name}</h2>
      <p>Nicjname: {nickName}</p>
    </div>
  )
}

export default User
