
import { useContext, useMemo } from "react";
import { CartContext } from "./CartContex";
import { useNavigate } from "react-router-dom";
import "./Css/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);
  const navigate = useNavigate();

  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }, [cart]);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty">Empty Cart 🛒</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              
              
              <img
                src={item.thumbnail || item.image}
                alt={item.title || item.name}
              />

             
              <div className="cart-details">
                <h3>{item.title || item.name}</h3>
                <p>Price: ₹{item.price}</p>

                
                <div className="qty">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

              
                <p className="subtotal">
                  Subtotal: ₹{item.price * item.qty}
                </p>
              </div>

             
              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h2>Total: ₹{total}</h2>

        <button
          onClick={() => navigate("/checkout")}
          disabled={cart.length === 0}
          className="purchase"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;