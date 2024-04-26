const url =" https://api.github.com/users"
import axios  from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosData = () => {
    const [users, setUsers]= useState([])
    useEffect(()=>{
const response = axios.get(url)
const data = response.then((res)=>{setUsers(res.data)}
)

    },[])
  return (
    <div>
                      {console.log(users)}
        { users.map((data)=>     
                <div className='bg-red-600' key={data.id}>
                    <img className='w-10 h-10 rounded-full overflow-hidden' src={data.avatar_url} alt="" />
                    <h1 className='bg-green-200'>{data.login}</h1>
                </div>
            
     )}      
    </div>
  )
}

export default AxiosData
