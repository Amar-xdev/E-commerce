import React from "react";
import ProductGrid from "./ProductGrid";

const HeroWomen = [
  {
    id: 1,
    name: "Floral Dress",
    price: 1299,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03"
  },
  {
    id: 2,
    name: "Stylish Top",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: 1499,
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09"
  },
  {
    id: 4,
    name: "Party Wear",
    price: 1999,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03"
  }
];

const Women = () => {
  return <ProductGrid title="Women's Collection" products={HeroWomen} />;
};

export default Women;