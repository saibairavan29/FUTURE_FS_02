import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">

          {/* Brand + Description */}
          <div className="col-md-4">
            <h4 className="footer-brand">Skyler Store</h4>
            <p className="small text-secondary">
              Premium products. Trusted quality. Fast delivery — experience the best online shopping.
            </p>

            {/* Social Icons */}
            <div className="social-icons mt-3">
              <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-link"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="col-md-2">
            <h5 className="footer-title">Shop</h5>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/category/smartphones">Smartphones</Link></li>
              <li><Link className="footer-link" to="/category/laptops">Laptops</Link></li>
              <li><Link className="footer-link" to="/category/accessories">Accessories</Link></li>
              <li><Link className="footer-link" to="/products">All Products</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-2">
            <h5 className="footer-title">Support</h5>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/contact">Contact</Link></li>
              <li><Link className="footer-link" to="/shipping">Shipping</Link></li>
              <li><Link className="footer-link" to="/returns">Returns</Link></li>
              <li><Link className="footer-link" to="/faq">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4">
            <h5 className="footer-title">Newsletter</h5>
            <p className="small text-secondary">Get exclusive deals & updates.</p>

            <div className="input-group">
              <input
                type="email"
                className="form-control newsletter-input"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4 pt-3 border-top border-secondary small">
          © 2025 <span className="fw-semibold">Skyler Store</span> — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
