import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Olá, Mundo!</h1>
        <div><p className='paragrafo'>testando como funciona o componente basico do react</p></div>
      </div>
    </>
  )
}

export default App

