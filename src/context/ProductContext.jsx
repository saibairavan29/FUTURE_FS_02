import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(""); // "" => all
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setAllProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    // apply search + category filters
    let list = [...allProducts];
    if (category) {
      list = list.filter(p => p.category === category);
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    setFilteredProducts(list);
  }, [allProducts, searchTerm, category]);

  const uniqueCategories = Array.from(new Set(allProducts.map(p => p.category)));

  return (
    <ProductContext.Provider value={{
      products: filteredProducts,
      allProducts,
      loading,
      categories: uniqueCategories,
      setSearchTerm,
      setCategory,
      searchTerm,
      category
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
