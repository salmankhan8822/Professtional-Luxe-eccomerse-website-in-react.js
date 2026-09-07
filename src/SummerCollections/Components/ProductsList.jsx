import { useEffect, useRef, useState } from "react";
import "./ProductList.css";
import { products } from "../data/SummerProducts";
import { useNavigate } from "react-router-dom";


function ProductsList({season = null, searchTerm = ""}) {
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  cardsRef.current.forEach((card) => {
    if (card) {
      observer.observe(card);
    }
  });

  return () => {
    observer.disconnect();
  };
}, [sortOption, searchTerm, season]);

    
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Normal season filtering
const seasonProducts = season ? products.filter((product) =>
        product.season?.toLowerCase() === season.toLowerCase()) : products;

// Search submitted from Navbar
const searchFilteredProducts = searchTerm ? products.filter((product) => {

      const search = searchTerm.toLowerCase().trim();

      return product.category ?.toLowerCase().includes(search);
    }) : category ? seasonProducts.filter( (product) =>
        product.category?.toLowerCase() === category.toLowerCase()) : seasonProducts;

  const sortedProducts = [...searchFilteredProducts];


  if (sortOption === "price-low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "price-high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "name-a-z") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortOption === "name-z-a") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortOption === "date-old-new") {
    sortedProducts.sort( (a, b) => new Date(a.date) - new Date(b.date));
  }

  if (sortOption === "date-new-old") {
    sortedProducts.sort( (a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sortOption === "best-selling") {
    sortedProducts.sort((a, b) => b.sold - a.sold);
  }

  // DISCOUNT FUNCTION
const getDiscountPercentage = (oldPrice, price) => {
  return Math.round( ((oldPrice - price) / oldPrice) * 100);
};




  return (
    <main className="summer-page">
      <section className="summer-category-section">
        <div className="container">
         
             {/* =========================
              SORT SECTION
          ========================= */}
              <div className="product-sort-section">

             <div className="product-sort-left">
              <span className="sort-label">SORT BY</span>

              <div className="sort-dropdown">
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-dropdown-select">

                  <option value="featured">Featured</option>
                  <option value="most-relevant">Most relevant</option>
                  <option value="best-selling">Best selling</option>
                  <option value="name-a-z">Alphabetically, A-Z</option>
                  <option value="name-z-a">Alphabetically, Z-A</option>
                  <option value="price-low-high">Price, low to high</option>
                  <option value="price-high-low">Price, high to low</option>
                  <option value="date-old-new">Date, old to new</option>
                  <option value="date-new-old">Date, new to old</option>
                </select>
              </div>
            </div>

          </div>

          {/* {products} */}

             {searchTerm && (
            <div className="search-results-message mb-4 text-center">
           <h4>{sortedProducts.length} results found for "{searchTerm}"</h4>
            </div>
                  )}

          <div className="row">
            {sortedProducts.map((product, index) => (
              <div className="col-6 col-sm-6 col-lg-3" key={product.id}>

                <div ref={(element) => { cardsRef.current[index] = element;}}
                  className="summer-product-card scroll-card"
                  style={{ transitionDelay: `${index * 0.02}s`,}}>
                  {/* Product Image */}
                  <div className="summer-product-image">
                    <img src={product.image} alt={product.name} loading="lazy"
                      onClick={() => navigate(`/product/${product.id}`)}style={{ cursor: "pointer" }}/>

                    {/* Product Actions */}
                    <div className="summer-product-actions">
                      <button type="button" className="product-action-btn" aria-label="Add to cart">
                        <i className="bi bi-bag-plus"></i>
                      </button>

                      <button type="button" className="product-action-btn" aria-label="View product"
                      onClick={() => navigate(`/product/${product.id}`)}>
                        <i className="bi bi-eye"></i>
                      </button>
                    </div>

                    {/* {season badge} */}
                       
                    {/* Sale Badge */}
                           {/* DISCOUNT */}
                  <span className="summer-sale-badge">-{getDiscountPercentage( product.oldPrice, product.price)}%
                  </span>
                     {/* Sold Quantity */}
                      <span className="summer-sold-badge">{product.sold} sold</span>
                  </div>

                  {/* Product Information */}
                  <div className="summer-product-info">
                    <p className="summer-product-category">{product.category}</p>

                    <h3 className="summer-product-name">{product.name}</h3>

                    <p className="summer-product-description">{product.description}</p>

                    <div className="summer-product-price">
                      <span className="summer-old-price">
                        Rs. {product.oldPrice.toLocaleString()}
                      </span>

                      <span className="summer-current-price">
                        Rs. {product.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductsList;