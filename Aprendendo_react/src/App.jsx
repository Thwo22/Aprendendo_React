import { useState } from 'react'
import './App.css'
import Frase from './components/frase';
import SayMyName from "./components/SayMyName.1";
import Pessoa from './components/pessoa';
import List from './components/list';
import Evento from './components/evento';
import Form from './components/form';

function App() {

  return (
    <>
      <div className='container'>
        <h1>testando eventos</h1>
        <Evento numero="1"/>
        <Evento numero="2"/>
        <Form/>
      </div>
      
    </>
  )
}

export default App

