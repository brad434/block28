import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'



const navbar = () => {
  return (
    <div id="container">
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/blue"}>Blue</Link>
        <Link to={"/red"}>Red</Link>
      </div>
    </div>
  )
}

export default navbar