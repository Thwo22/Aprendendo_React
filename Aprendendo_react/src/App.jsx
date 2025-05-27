import { useState } from 'react'
import './App.css'
import Frase from './components/frase';
import SayMyName from "./components/SayMyName.1";
import Pessoa from './components/pessoa';

function App() {

  return (
    <>
      <div className='container'>
        <Frase/>
        <Pessoa nome="Thiago" idade="18 anos" profissao="Desenvolvedor Web" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GgSPYmslH8mRKnXcBJkcg4F5KGE1zQxKnA&s"/>
      </div>
    </>
  )
}

export default App

