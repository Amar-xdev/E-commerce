import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from './CartContex'
import "./Css/Navbar.css"

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <button className="menu-btn" onClick={() => setIsOpen(true)}>
            ☰
          </button>

          <div className="logo">
            <img
              src="https://plus.unsplash.com/premium_vector-1727544664530-aade313813c3"
              alt="logo"
            />
          </div>
        </div>

        <div className="nav-links">
          <div className="sidebar-header">
            
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/men" onClick={() => setIsOpen(false)}>Men</NavLink>
          <NavLink to="/women" onClick={() => setIsOpen(false)}>Women</NavLink>
          <NavLink to="/kids" onClick={() => setIsOpen(false)}>Kids</NavLink>
        </div>

        <div className="right-nav">
          <NavLink to="/login">
            <button className="signup-btn">Sign up</button>
          </NavLink>

          <NavLink to="/cart" className="cart-icon">
            🛒
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </NavLink>
        </div>
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/men" onClick={() => setIsOpen(false)}>Men</NavLink>
        <NavLink to="/women" onClick={() => setIsOpen(false)}>Women</NavLink>
        <NavLink to="/kids" onClick={() => setIsOpen(false)}>Kids</NavLink>
      </div>

      {isOpen && (
        <div className="backdrop" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  )
}

export default Navbar