import React from 'react'
import {Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      
      <nav className="navbar bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex" role="search">
      <Link to="/cart">cart</Link>
      
    </form>
  </div>
</nav>

    </div>
  )
}

export default Navbar
