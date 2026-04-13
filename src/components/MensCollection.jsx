import { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import "./Css/Women.css";
import { CartContext } from "./CartContex";

const Menscollection = () => {

  const { cart, addToCart: addToCartContext } = useContext(CartContext);

  const handleAddToCart = useCallback((product) => {
    addToCartContext(product);
  }, [addToCartContext]);

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0); 

  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
      );
      setProducts(res.data.products);
    };

    fetchData();
  }, [page]);

  return (
    <div className="women">
      <h1>Men's Collection</h1>

      <div className="grid">
        {products.map((p) => {

          const itemInCart = cart.find(item => item.id === p.id);

          return (
            <div className="card" key={p.id}>
              <img src={p.thumbnail} alt={p.title} />
              <h3>{p.title}</h3>
              <p className="price">₹{p.price}</p>

              <button onClick={() => handleAddToCart(p)}>
                Add to Cart
              </button>

              {itemInCart && (
                <p style={{ marginTop: "8px", fontWeight: "bold" }}>
                  Qty: {itemInCart.qty}
                </p>
              )}
            </div>
          );
        })}
      </div>

      
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        
        <button 
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 0}
          style={{ marginRight: "10px" }}
        >
          ⬅ Prev
        </button>

        <span>Page {page + 1}</span>

        <button 
          onClick={() => setPage(prev => prev + 1)}
          style={{ marginLeft: "10px" }}
        >
          Next ➡
        </button>

      </div>
    </div>
  );
};

export default Menscollection;