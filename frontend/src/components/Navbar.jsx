import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid text-light">
    <Link className="navbar-brand text-light bg-dark" to="/Register">API Data</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/Contact">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Productsb">New Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/productsa">Store</Link>
        </li>
       
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar