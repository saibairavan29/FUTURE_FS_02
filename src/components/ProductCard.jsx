import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="product-card h-100 p-3 shadow-sm">
        
        {/* Image Section */}
        <div className="product-image-container text-center">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>

        {/* Content */}
        <div className="card-body d-flex flex-column">
          <h6 className="product-title">{product.title}</h6>

          <p className="product-description text-muted">
            {product.description}
          </p>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="product-price">${product.price}</span>
            <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm btn-view">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
