
import "./Css/HeroMen.css"; 

const ProductGrid = ({ title, products }) => {
  return (
    <div className="men">
      <h1>{title}</h1>

      <div className="cart">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;