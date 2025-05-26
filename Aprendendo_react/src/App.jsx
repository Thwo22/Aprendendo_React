import { useState } from 'react'
import './App.css'

function App() {
  
  const name = "Thiago";

  return (
    <>
      <div className="container">
        <h1>Olá, {name}, este é  seu Mundo!</h1>
        <h2>alterando jsx</h2>
        <div><p className='paragrafo'>testando como funciona o componente basico do react</p></div>
      </div>
    </>
  )
}

export default App

