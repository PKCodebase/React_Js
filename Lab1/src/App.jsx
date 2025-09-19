import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'


function App() {
  const [count, setCount] = useState(0)
  const userName = "Kaushik"

  return (
    <>
     {/* <h1>Counter val:{count}</h1>
     <User />
     <button onClick={()=>setCount(count+1)}> Increase </button>
     <button onClick={()=>setCount(count-1)}>Decrease </button> */}
     <h1> My Name is {userName}</h1>
     <button onClick={()=>alert("My name is kaushik")}>Click</button>

    </>
  )
}

export default App
