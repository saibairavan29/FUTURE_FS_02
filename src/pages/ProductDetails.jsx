import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, getItemQuantity, increment, decrement } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <h3 className="text-center mt-5">Loading...</h3>;

  const qty = getItemQuantity(product.id);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-lg-10">
          <div className="card shadow p-4 border-0">

            <div className="row g-4">

              {/* Product Image */}
              <div className="col-md-5 text-center d-flex align-items-center justify-content-center">
                <div className="image-box border rounded p-3 bg-light w-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{ maxHeight: "350px", objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="col-md-7">
                <h3 className="fw-bold">{product.title}</h3>

                <p className="text-capitalize text-secondary mb-1">
                  {product.category}
                </p>

                <h4 className="text-success fw-bold mb-3">${product.price}</h4>

                <p className="text-muted" style={{ lineHeight: "1.6" }}>
                    {product.description.length > 150
                    ? product.description.substring(0, 150) + "..."
                    : product.description}
                </p>


                {/* Cart Buttons */}
                {!qty ? (
                  <button
                    className="btn btn-primary px-4 py-2 mt-3"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="d-flex align-items-center mt-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => decrement(product.id)}
                    >
                      -
                    </button>

                    <span className="mx-3 fs-5">{qty}</span>

                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => increment(product.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
