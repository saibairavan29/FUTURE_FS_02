import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, increment, decrement, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (!cart.length) return <h3 className="text-center mt-5">Your cart is empty 🛒</h3>;

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="d-flex align-items-center border p-3 mb-3">
          <img src={item.image} alt={item.title} style={{ height: "80px", objectFit: "contain" }} />
          <div className="ms-3 flex-grow-1">
            <h6>{item.title}</h6>
            <p className="mb-1">${item.price.toFixed(2)}</p>
            <div className="d-flex align-items-center">
              <button className="btn btn-sm btn-outline-secondary" onClick={() => decrement(item.id)}>-</button>
              <div className="px-3">{item.quantity}</div>
              <button className="btn btn-sm btn-outline-secondary" onClick={() => increment(item.id)}>+</button>
              <button className="btn btn-sm btn-danger ms-3" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}

      <h4 className="mt-3">Total: ${totalPrice.toFixed(2)}</h4>

      <div className="mt-4">
        <button className="btn btn-success me-2" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        <Link to="/" className="btn btn-outline-primary">Continue Shopping</Link>
      </div>
    </div>
  );
}
