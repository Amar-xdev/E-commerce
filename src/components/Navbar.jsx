
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from './CartContex'

const Navbar = () => {

  const { cart } = useContext(CartContext);

  
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className='nav'>

      <img
        src="https://plus.unsplash.com/premium_vector-1727544664530-aade313813c3"
        height={50}
        width={50}
        alt="logo"
      />

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to="/men" className={({ isActive }) => isActive ? "active" : ""}>
          Men
        </NavLink>

        <NavLink to="/women" className={({ isActive }) => isActive ? "active" : ""}>
          Women
        </NavLink>

        <NavLink to="/kids" className={({ isActive }) => isActive ? "active" : ""}>
          Kids
        </NavLink>
      </div>

      <NavLink to="/login">
        <button>Login</button>
      </NavLink>

      
      <NavLink 
        to="/cart" 
        className={({ isActive }) => isActive ? "active" : ""}
        style={{ position: "relative", marginLeft: "20px" }}
      >
        🛒
        {totalItems > 0 && (
          <span style={{
            position: "absolute",
            top: "-8px",
            right: "-12px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 7px",
            fontSize: "12px"
          }}>
            {totalItems}
          </span>
        )}
      </NavLink>

    </div>
  )
}

export default Navbar;