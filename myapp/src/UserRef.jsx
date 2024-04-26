import React, {  useRef, useState } from 'react'

const UserRef = () => {
  const userRef = useRef({
    name: "",
    email:""
  })
 const [state,setState] = useState(userRef.current)
 

  const HandleData =()=>{
    setState("Hello World")
  }
  return (
    <div>
      <h1>Use Ref</h1>
  <form action="">
    <p>Name</p>
    <input type="text" placeholder='Enter a Name' />
    <p>Email</p>
    <input type="email" />
    <button>Save Data</button>
  </form>
      <p>{state}</p> 
      <button onClick={()=>HandleData()}>Click me</button>
      
    </div>
  )
}

export default UserRef
