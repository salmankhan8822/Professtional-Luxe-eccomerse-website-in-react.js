import "./App.css";
import { Routes, Route} from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Shop from "./Components/ShopByCategory/Shop";
import ProductsList from "./SummerCollections/Components/ProductsList";
import CartProducts from "./CartProductsss/CartProducts";
import ProductDetails from "./ProductDetailsPage/ProductDetails";
import Cart from "./CartDetails/Cart";
import Checkout from "./Components/CheckOut/Checkout";
import OrderConfirmation from "./Components/OrderConfirmation/OrderConfirmation";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import ShippingPolicy from "./Components/ShippingPolicy/ShippingPolicy";
import RefundPolicy from "./Components/RefundPolicy/RefundPolicy";
import TermsOfService from "./Components/TermsofServices/TermsofServices";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


function App() {

  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearch = (value) => {
    setSearchTerm(value.trim());
  };


  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? {...item, quantity: item.quantity + quantity,} : item);

      }

      return [...prevItems, { ...product, quantity: quantity,},
      ];
    });

    // Open cart immediately
    setIsCartOpen(true);
  };


  return (
    <div>
        <ScrollToTop />
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} onSearch={handleSearch} cartItems={cartItems}/>

      <Routes>
        {/* HOME */}
        <Route path="/" element={
            <>
              <Hero />
              <Shop />
              <ProductsList searchTerm={searchTerm}/>
            </>
          }
        />


        {/* SUMMER */}

        <Route path="/summer" element={
            <ProductsList season="summer" searchTerm={searchTerm}/>
          }
        />

        {/* WINTER */}

        <Route path="/winter" element={
            <ProductsList season="winter" searchTerm={searchTerm}/>
          }
        />

        {/* PRODUCT DETAILS */}

        <Route path="/product/:id" element={ 
          <ProductDetails addToCart={addToCart}/>
          }
        />

          {/* FULL CART PAGE */}
         <Route path="/cart" element={
            <Cart cartItems={cartItems} setCartItems={setCartItems}/>
             }/>

             {/* checkout section */}
            <Route path="/Checkout" element={<Checkout /> }/>

            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            

      </Routes>

      {/* CART DRAWER */}
      <CartProducts cartItems={cartItems} setCartItems={setCartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
      <Footer />

    </div>
  );
}

export default App;