import { useState } from 'react'
import './App.css'
import HelloWorld from './components/helloWorld';

function App() {
  
  const name = "Thiago";

  const imagemRatinho = "https://t2.tudocdn.net/614041?w=824&h=494"

  return (
    <>
      <HelloWorld/>
      <div className="container">
        <h1>Olá, {name}, este é  seu Mundo!</h1>
        <h2>alterando jsx</h2>
        <p className='paragrafo'>testando como funciona o componente basico do react</p>
        <img className="xaropinho-img" src={imagemRatinho} alt="Imagem do Xaropinho"/>
      </div>
    </>
  )
}

export default App

