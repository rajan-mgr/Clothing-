import React, { useEffect, useState } from "react";
import "../styles/Products.css";
import "../styles/CategorySidebar.css";
// import "../styles/ProductCard.css";

function Men() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [sortOrder, setSortOrder] = useState("");

  const menCategories = ["mens-shirts", "mens-shoes", "mens-watches"];
  const womenCategories = [
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
  ];

  useEffect(() => {
    const categories = selectedCategory === "men" ? menCategories : womenCategories;

    Promise.all(
      categories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => data.products || [])
      )
    )
      .then((results) => {
        const allProducts = results.flat();
        setProducts(allProducts);
        setSortOrder("");
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [selectedCategory]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    const sorted = [...products];
    if (value === "high-to-low") sorted.sort((a, b) => b.price - a.price);
    else if (value === "low-to-high") sorted.sort((a, b) => a.price - b.price);

    setProducts(sorted);
  };

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <div className="shop-layout">
      <aside className="category-sidebar">
        <h2>Category</h2>
        <div className="gender-filter">
          <label>
            <input
              type="checkbox"
              name="gender"
              checked={selectedCategory === "men"}
              onChange={() => setSelectedCategory("men")}
            />
            <span>Men</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="gender"
              checked={selectedCategory === "women"}
              onChange={() => setSelectedCategory("women")}
            />
            <span>Women</span>
          </label>
        </div>
      </aside>

      <div className="shop-main">
        <div className="sort-container">
          <select value={sortOrder} onChange={handleSortChange} className="sort-select">
            <option value="">Sort by Price</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
          </select>
        </div>

        {products.length === 0 ? (
          <p className="loading">Loading products...</p>
        ) : (
          <div className="product-grid">
            {products.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.thumbnail || item.images?.[0]} alt={item.title} />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Men;
