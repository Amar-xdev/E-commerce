
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
        <button>Sign up</button>
      </NavLink>

      
      <NavLink 
        to="/cart" 
        className={({ isActive }) => isActive ? "active" : ""}
        style={{ position: "relative", marginLeft: "20px" }}
      >
         <img src="https://images.unsplash.com/photo-1638428355339-3ae4ae63bf4e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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