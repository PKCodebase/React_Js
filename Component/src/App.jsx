import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {


  return (
    <>
      <h1> Hello my name is kaushik</h1>
      <Footer />
      <Header />
    </>
  )
}



function Header(){
  return (
    <>
    <h1> Header Component </h1>
    </>
  )
}


function Footer(){
  return(
    <>
    <h1>Footer Component</h1>
    </>
  )
}
 export default App;