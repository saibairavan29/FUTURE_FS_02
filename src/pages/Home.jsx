import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import BannerCarousel from "../components/BannerCarousel";

export default function Home() {
  const { products, loading } = useProducts();

  return (
    <>
      <BannerCarousel />
      <div className="container mt-4">
        <h2 className="mb-4">Products</h2>

        {loading && <p>Loading products...</p>}

        <div className="row">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </>
  );
}
