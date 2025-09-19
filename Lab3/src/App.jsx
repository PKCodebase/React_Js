import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "kaushik Prasad"
  let a = 10
  let b = 20

  const userObj ={
    name : "kaushik",
    age : 21,
    city : "Bangalore"  
  }

  const path = "pic.jpg"

  const users = ["kaushik","prasad","kumar"]

  function fruit(){
    return "apple"
  }

  function sum(){
    return 100+20
  }

  function operation(a,b,op){
    if(op=="+")
      return a+b
    else if(op=="-")
      return a-b
    else 
      return a*b
  }
  return(
  <>
  <h1>Variable and functions</h1>
    {/* <h1>{name?name:"user not found"}</h1> */}
    <h1>{a+b} </h1>
    <h1>{fruit()}</h1>
    <h1>{sum()}</h1>
    <h1>{operation(20,30,"")} </h1>
    <h1>{userObj.name} </h1>
    <h1>{userObj.age} </h1>
    <h1>{userObj.city} </h1>
    {/* <h1>{userObj}</h1> Not Possible */}

    <h1>{users[0]}</h1>
    <h1>{users[1]}</h1>
    <h1>{users[2]}</h1>
    {/* <h1>{users}</h1> Not Possible */}

<input type='text' value={name} id={name}></input>

<img src={path} alt="image"/>

  </>
  )
}

export default App;
