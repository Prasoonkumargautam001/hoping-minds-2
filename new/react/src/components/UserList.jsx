import React from 'react'
import User from './User'
import { people } from './data'

const UserList = () => {
  return (
    <div>
{
    people.map((data)=>{
        <User Image={data.images.map((data)=> data.small.url)} name={data.name} nickName={data} />
    })
}
    </div>
  )
}

export default UserList
