import React from 'react'

const DataShow = ({name, age, deleteData}) => {
  return (
    <div className='box'>
      <h1 >{name}</h1>
      <h2>{age}</h2>
      <button onClick={deleteData}>Remove</button>
    </div>
  )
}

export default DataShow
