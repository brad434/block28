import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import Navbar from './components/navbar'
import MainSection from './components/mainSection'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div>
        <Navbar />
        <MainSection />
        <Footer />
      </div>
    </>
  )
}

export default App
