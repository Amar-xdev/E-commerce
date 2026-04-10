import React, { useState, useContext } from "react";
import "./Css/PlaceOrder.css";
import { CartContext } from "./CartContex";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {

  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.city || !formData.pincode) {
      alert("Please fill all fields");
      return;
    }

    alert("Order Placed Successfully ");

    clearCart();        
    navigate("/");      
  };

  return (
    <div className="checkout">
      <div className="checkout-container">

        <h1>Checkout</h1>

        <form onSubmit={handleSubmit} className="checkout-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
          />

          <h3>Payment Method</h3>

          <select name="payment" value={formData.payment} onChange={handleChange}>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>

          <button type="submit">Place Order</button>

        </form>

      </div>
    </div>
  );
};

export default PlaceOrder;