import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "", payment: "COD" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill required fields.");
      return;
    }
    // simulate order placement
    setSuccess(true);
    clearCart();
  };

  if (!cart.length && !success) {
    return <h3 className="text-center mt-5">Your cart is empty 🛒</h3>;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h2>Checkout</h2>

      {success ? (
        <div className="alert alert-success">
          <h5>Order Placed Successfully!</h5>
          <p>Thanks, {form.name || "Customer"} — your order has been received.</p>
        </div>
      ) : (
        <>
          <div className="card p-3 mb-4">
            <h5>Order Summary</h5>
            <p>Items: {cart.reduce((s, i) => s + i.quantity, 0)}</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input name="phone" className="form-control" value={form.phone} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea name="address" className="form-control" value={form.address} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Payment Mode</label>
              <select name="payment" className="form-select" value={form.payment} onChange={handleChange}>
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI</option>
                <option value="Card">Debit/Credit Card</option>
              </select>
            </div>

            <button className="btn btn-success" type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
}
