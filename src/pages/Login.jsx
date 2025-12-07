import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const { login } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter a name.");
      return;
    }
    login({ name, email });
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* LEFT — Illustration */}
        <div className="login-illustration d-none d-md-flex">
          <img
            src="https://cdn.prod.website-files.com/616ef101d9f2a359845dab27/643fd082382a06d748ef1a27_b2c-ecommerce-hero.webp"
            alt="Ecommerce Banner"
          />
        </div>

        {/* RIGHT — Form */}
        <div className="login-form">
          <h2 className="text-center mb-2 fw-bold">Welcome Back!</h2>
          <p className="text-center text-muted mb-4">
            Enter your details to continue shopping.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">Email (optional)</label>
              <input
                type="email"
                className="form-control input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-animated text-white w-100 mt-2">
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
