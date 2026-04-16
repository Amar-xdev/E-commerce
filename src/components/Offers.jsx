import React from 'react'
import "./Css/Offers.css"
import { useNavigate } from "react-router-dom";

const Offers = () => {

  const navigate = useNavigate();

  return (
    <div className='offers'>

      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>

        
        <button onClick={() => navigate("/offers")}>
          Check Now
        </button>
      </div>

      <div className="offers-right">
        <img 
          src="https://images.unsplash.com/photo-1527264935190-1401c51b5bbc" 
          alt="offers"
        />
      </div>

    </div>
  )
}

export default Offers;