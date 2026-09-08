import "./Navbar.css";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

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
            <Link className="navbar-brand brand-logo me-4" to="/">
              LUXÉ<span className="brand-dot">.</span>
            </Link>

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
                      <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link  className="nav-link dropdown-toggle"  to="/summer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Summer
                      </Link>

                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/summer?category=Luxury%20Lawn">Luxury Lawn</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/summer?category=Printed%20Lawn">Printed Lawn</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/summer?category=Embroidered%20Lawn">Embroidered Lawn</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <Link  className="nav-link dropdown-toggle"  to="/winter"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Winter
                      </Link>

                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/winter?category=Dhanak">Dhanak</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/winter?category=Khaddar">Khaddar</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/winter?category=Karandi">Karandi</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/winter?category=Velvet%20Collection">Velvet Collection</Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="#">Ready to Wear</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="#">New Arrivals</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link sale-link" to="#">Sale</Link>
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