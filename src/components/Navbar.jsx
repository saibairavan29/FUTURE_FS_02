import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css"
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const { categories, setSearchTerm, setCategory, searchTerm } = useProducts();
  const { user, logout } = useUser();
  const [localSearch, setLocalSearch] = useState(searchTerm || "");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(localSearch);
    navigate("/");
  };

  const handleCategory = (cat) => {
    setCategory(cat);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">

        {/* Brand acts as Home */}
        <Link className="navbar-brand" to="/">Skyler</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Category dropdown */}
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle bg-transparent border-0"
                id="catDrop"
                data-bs-toggle="dropdown"
              >
                Categories
              </button>

              <ul className="dropdown-menu" aria-labelledby="catDrop">
                <li>
                  <button className="dropdown-item" onClick={() => handleCategory("")}>
                    All
                  </button>
                </li>

                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className="dropdown-item"
                      onClick={() => handleCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            {/* Login button */}
            {!user && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}

            {/* User dropdown when logged in */}
            {user && (
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle bg-transparent border-0"
                  id="userDrop"
                  data-bs-toggle="dropdown"
                >
                  {user.name}
                </button>

                <ul className="dropdown-menu" aria-labelledby="userDrop">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>

          {/* Search bar */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <button className="btn btn-outline-warning bg-warn" type="submit">
              Search
            </button>
          </form>

          {/* Cart */}
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-light">
              Cart ({totalItems})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
