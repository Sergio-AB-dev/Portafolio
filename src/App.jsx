import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Sobre_mi from "./components/Sobre_mi"
import Estudios from "./components/Estudios"
import Trabajos from "./components/Trabajos"

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre_mi />
      <Estudios />
      <Trabajos />
    </>
  )
}

export default App
