import React from "react";
import "./Css/ExclusiveOffers.css";

const offers = [
  {
    id: 1,
    name: "Stylish Shirt",
    price: 999,
    discount: 40,
    image: "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Kids Wear",
    price: 799,
    discount: 30,
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d"
  },
  {
    id: 3,
    name: "Women's Dress",
    price: 1499,
    discount: 50,
    image: "https://images.unsplash.com/photo-1753192104212-14f586962222?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZHJlc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    name: "Shoes",
    price: 1999,
    discount: 35,
    image: "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const ExclusiveOffers = () => {
  return (
    <div className="offers-page">
      <h1>Exclusive Offers</h1>

      <div className="offers-grid">
        {offers.map((item) => {
          const discountedPrice = Math.floor(
            item.price - (item.price * item.discount) / 100
          );

          return (
            <div className="offer-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>

              <p className="old">₹{item.price}</p>
              <p className="new">₹{discountedPrice}</p>
              <p className="discount">{item.discount}% OFF</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExclusiveOffers;