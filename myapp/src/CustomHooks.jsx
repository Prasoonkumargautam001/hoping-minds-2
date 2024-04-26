import React, { useState } from 'react';
import useData from './UseHook';


const CustomHooks = () => {
    const { user, addUser } = useData("Rahul");
    const [age, setAge] = useState()
    const handelSubmit=(e)=>{
        e.preventDefault()

    }
    const handelAge =(e)=>{
        e.preventDefault()
        setAge(e.target.value)
    }
    return (
        <div>
            <h1>{user}</h1>
            <button type='submit' onClick={addUser}>Change User</button>
            <form onSubmit={handelSubmit}>
            <input type="text" value={user}  readOnly/>
            <input type="number" name="" id=""  onChange={handelAge}/>
            <button type='submit' onClick={()=>{
                document.write( `<h1>${user} is ${age} Years old</h1>`)
            }}>Add User</button>
            </form>
        </div>
    );
}

export default CustomHooks;
