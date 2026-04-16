
import React, { useState, useContext, useEffect } from "react";
import "./Css/PlaceOrder.css";
import { CartContext } from "./CartContex";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {

  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod"
  });

  useEffect(() => {
    if (cart.length === 0 && !orderPlaced) {
      navigate("/");
    }
  }, [cart, orderPlaced, navigate]);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.city || !formData.pincode) {
      alert("Please fill all fields");
      return;
    }

    setOrderPlaced(true);
    clearCart();          
    navigate("/success");
  };

  return (
    <div className="checkout">

      <div className="checkout-form-box">
        <h2>Shipping Details</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />

          <select name="payment" value={formData.payment} onChange={handleChange}>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>

          <button type="submit">Place Order</button>
        </form>
      </div>

      <div className="checkout-summary">
        <h2>Order Summary</h2>

        {cart.map((item) => (
          <div className="summary-item" key={item.id}>
            <img src={item.thumbnail || item.image} />
            <div>
              <p>{item.title || item.name}</p>
              <p>Qty: {item.qty}</p>
              <p>₹{item.price * item.qty}</p>
            </div>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>
      </div>

    </div>
  );
};

export default PlaceOrder;