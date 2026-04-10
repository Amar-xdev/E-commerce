import React from "react";
import ProductGrid from "./ProductGrid";

const HeroMen = [
  {
    id: 1,
    name: "Stylish Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1620513867117-b11fe780ba8a"
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 699,
    image: "https://images.unsplash.com/photo-1655977331025-7535997b41da"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 1999,
    image: "https://images.unsplash.com/photo-1543084951-1650d1468e2d"
  },
  {
    id: 4,
    name: "Formal Wear",
    price: 1499,
    image: "https://plus.unsplash.com/premium_photo-1661780837006-35f505e0763a"
  }
];

const Men = () => {
  return <ProductGrid title="Men's Collection" products={HeroMen} />;
};

export default Men;