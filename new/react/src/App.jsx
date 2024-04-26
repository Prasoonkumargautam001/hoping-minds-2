import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList'
import AxiosData from './components/axios/AxiosData'

function App() {


  return (
    <>
   <div>
    <h1 className='bg-pink-700'>hello</h1>
    <AxiosData/>
   </div>
    </>
  )
}

export default App
