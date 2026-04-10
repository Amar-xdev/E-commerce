import { useContext } from "react";
import { CartContext } from "./CartContex";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Empty Cart 🛒</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "10px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h3>{item.title || item.name}</h3>
              <p>₹{item.price}</p>
              <p>Qty: {item.qty}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "50%",
                cursor: "pointer"
              }}
            >
              ❌
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>

      
      <button
        onClick={() => navigate("/checkout")}
        disabled={cart.length === 0}
        style={{
          background: cart.length === 0 ? "gray" : "#4CAF50",
          cursor: cart.length === 0 ? "not-allowed" : "pointer",
          padding: "10px 20px",
          border: "none",
          color: "white",
          borderRadius: "5px"
        }}
      >
        Purchase
      </button>
    </div>
  );
};

export default Cart;