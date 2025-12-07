import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const { categories, setSearchTerm, setCategory, searchTerm, category } = useProducts();
  const { user, logout } = useUser();

  const [localSearch, setLocalSearch] = useState(searchTerm || "");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setCategory(""); // reset category when searching
    setSearchTerm(localSearch);
    navigate("/");
  };

  const handleCategory = (cat) => {
    setSearchTerm("");      // clear search input
    setLocalSearch("");
    setCategory(cat);       // set chosen category
    document.body.click();  // close dropdown instantly
    navigate("/");
  };

  // Show "All" if category is empty
  const selectedCategory = category || "All";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
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

            {/* CATEGORY DROPDOWN */}
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle bg-transparent border-0"
                data-bs-toggle="dropdown"
              >
                {selectedCategory}
              </button>

              <ul className="dropdown-menu">
                <li>
                  <button
                    className={`dropdown-item ${category === "" ? "active" : ""}`}
                    onClick={() => handleCategory("")}
                  >
                    All
                  </button>
                </li>

                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`dropdown-item ${category === cat ? "active" : ""}`}
                      onClick={() => handleCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            {!user && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}

            {user && (
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle bg-transparent border-0"
                  data-bs-toggle="dropdown"
                >
                  {user.name}
                </button>

                <ul className="dropdown-menu">
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

          {/* SEARCH */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>

          {/* CART */}
          <Link to="/cart" className="btn btn-outline-light">
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
}
