import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Success.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success">
      <div className="success-box">
        <h1> Order Confirmed!</h1>
        <p>Your order has been placed successfully.</p>

        <button onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;