import "./Navbar.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ searchInput = "", setSearchInput, onSearch, cartItems = [] }) {
  const location = useLocation();

  // Case-insensitive check for checkout page
  const isCheckOutPage = location.pathname.toLowerCase() === "/checkout";
  const orderConfirmation = location.pathname.toLowerCase() === "/order-confirmation";
    
  const [mobileSearch, setMobileSearch] = useState(false);
  
  // Safe calculation to prevent crash if cartItems is undefined
  const cartCount = (cartItems || []).reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Jost:wght@400;500;600&display=swap" 
        rel="stylesheet"/>

      {/* Top announcement strip */}
      <div className="topbar-strip py-1">
        <div className="marquee">
          <span>Free shipping on orders over Rs. 5,000 &nbsp;•&nbsp; New Summer Drop is Live &nbsp;•&nbsp; Free shipping on orders over Rs. 5,000 &nbsp;•&nbsp; New Summer Drop is Live</span>
        </div>
      </div>

      <header className="site-header sticky-top">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container">

            {/* Logo */}
            <a className="navbar-brand brand-logo me-4" href="/">
              LUXÉ<span className="brand-dot">.</span>
            </a>

            {!isCheckOutPage && !orderConfirmation &&( 
              <>
                {/* Mobile toggler */}
                <button  className="navbar-toggler"  type="button"  data-bs-toggle="collapse"  data-bs-target="#mainNav"  aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNav">

                  {/* Menu links */}
                  <ul className="navbar-nav main-menu mx-auto">
                    <li className="nav-item">
                      <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a  className="nav-link dropdown-toggle"  href="/summer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Summer
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/summer?category=Luxury%20Lawn">Luxury Lawn</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/summer?category=Printed%20Lawn">Printed Lawn</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/summer?category=Embroidered%20Lawn">Embroidered Lawn</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a  className="nav-link dropdown-toggle"  href="/winter"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Winter
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/winter?category=Dhanak">Dhanak</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/winter?category=Khaddar">Khaddar</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/winter?category=Karandi">Karandi</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/winter?category=Velvet%20Collection">Velvet Collection</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">Ready to Wear</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">New Arrivals</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link sale-link" href="#">Sale</a>
                    </li>
                  </ul>

                  {/* Search + icons */}  
                  <div className="d-flex align-items-center gap-3 nav-actions">

                    <form  className="search-box d-none d-md-flex align-items-center"  role="search"
                     onSubmit={(e) => { e.preventDefault(); 
                       if (onSearch) onSearch(searchInput);}}>
                      <i className="bi bi-search"></i>
                      <input  type="search"  placeholder="Search products..."  aria-label="Search" value={searchInput}  onChange={(e) => setSearchInput && setSearchInput(e.target.value)}/>
                    </form>

                    <button  className="icon-btn d-md-none"  aria-label="Search"  type="button" 
                      onClick={() => setMobileSearch(!mobileSearch)}>
                      <i className="bi bi-search"></i>
                    </button>

                    <button className="icon-btn" aria-label="Account" type="button">
                      <i className="bi bi-person"></i>
                    </button>

                    <button  className="icon-btn position-relative"  aria-label="Cart"  type="button"  onClick={() => navigate("/Cart")}>
                      <i className="bi bi-bag"></i>
                      <span className="cart-badge">{cartCount}</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>

        {!isCheckOutPage && mobileSearch && (
          <div className="mobile-search-bar d-md-none px-3 pb-2">
            <form  className="search-box d-flex align-items-center w-100"  role="search"
              onSubmit={(e) => { e.preventDefault(); 
                if (onSearch) onSearch(searchInput);
              }}>
              <i className="bi bi-search"></i>
              <input  type="search"  placeholder="Search products..."  aria-label="Search" value={searchInput} 
                onChange={(e) => setSearchInput && setSearchInput(e.target.value)}/>
            </form>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;