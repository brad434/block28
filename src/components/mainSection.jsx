import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Red from './Red'
import Blue from './Blue'
import Home from './Home'


const mainSection = () => {
  return (
    <div id='container'>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  )
}

export default mainSection