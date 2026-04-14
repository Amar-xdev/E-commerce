
import { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import "./Css/Women.css";
import { CartContext } from "./CartContex";

const KidsCollections = () => {

    const { cart, addToCart: addToCartContext } = useContext(CartContext);

    const handleAddToCart = useCallback((product) => {
        addToCartContext(product);
    }, [addToCartContext]);

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)

    const limit = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const res = await axios.get(
                    "https://69dcc95084f912a264042db9.mockapi.io/products"
                );

                const start = page * limit;
                const end = start + limit;

                setProducts(res.data.slice(start, end));
                setTotal(res.data.length)

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const maxPage = Math.ceil(total / limit);

    return (
        <div className="women">
            <h1>Kids's Collection</h1>

            {loading ? (
                <h2 className="loader" style={{ textAlign: "center" }}>Loading please wait...</h2>
            ) : (


                <div className="grid">
                    {products.map((p) => {

                        const itemInCart = cart.find(item => item.id === p.id);

                        return (
                            <div className="card" key={p.id}>
                                <img src={p.image} alt={p.name} />
                                <h3>{p.name}</h3>
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
            )}
            <div style={{ marginTop: "20px", textAlign: "center" }}>

                <button
                    onClick={() => setPage(prev => prev - 1)}
                    disabled={page === 0}
                    style={{
                        marginRight: "10px",
                        background: page === 0 ? "gray" : "#4CAF50",
                        cursor: page === 0 ? "not-allowed" : "pointer"
                    }}

                >
                    ⬅ Prev
                </button>

                <span>Page {page + 1}</span>

                <button
                    onClick={() => setPage(prev => prev + 1)}

                    disabled={page >= maxPage - 1}
                    style={{
                        marginLeft: "10px",
                        background: page >= maxPage - 1 ? "gray" : "#4CAF50",
                        cursor: page >= maxPage - 1 ? "not-allowed" : "pointer"
                    }}

                >
                    Next ➡
                </button>

            </div>

        </div>

    );
};


export default KidsCollections;