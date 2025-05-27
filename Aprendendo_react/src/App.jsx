import { useState } from 'react'
import './App.css'
import SayMyName from "./components/SayMyName.1";
import Pessoa from './components/pessoa';

function App() {

  const nomeFeminino = "maria";
  return (
    <>
      <SayMyName nome="Thiago"/>
      <SayMyName nome={nomeFeminino}/>
      <Pessoa nome="Thiago" idade="18 anos" profissao="Desenvolvedor Web" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GgSPYmslH8mRKnXcBJkcg4F5KGE1zQxKnA&s"/>
    </>
  )
}

export default App

