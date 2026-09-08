import "./CartProducts.css";
import { useNavigate } from "react-router-dom";

function CartProducts({
  cartItems,
  setCartItems,
  isCartOpen,
  setIsCartOpen,
}) {

  const navigate = useNavigate();

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => item.id === id ? {...item, quantity: item.quantity + 1,} : item));
  };


  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => item.id === id ? {...item, quantity: item.quantity - 1,} : item).filter((item) => item.quantity > 0));
  };


  const removeItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };



  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  // ===============================
  // SUBTOTAL
  // ===============================

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


  // Free shipping
  const shipping = 0;
  const total = subtotal + shipping;


  return (
    <>
      {/* =================================
          DARK OVERLAY
      ================================= */}

      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>)}


      {/* =================================
          CART DRAWER
      ================================= */}

      <aside className={`cart-drawer ${ isCartOpen ? "cart-drawer-open" : ""}`}>

        {/* HEADER */}

        <div className="cart-drawer-header">

          <div>
            <h2>Shopping Cart</h2>
            <p>{totalItems}{" "}{totalItems === 1 ? "item" : "items"}</p>
          </div>
          <button type="button" className="cart-close-button" onClick={() => setIsCartOpen(false)} aria-label="Close cart">×</button>
        </div>


        {/* FREE SHIPPING */}

        <div className="free-shipping-box">
          <div className="shipping-progress">
            <div className="shipping-progress-bar"></div>
          </div>

          <p>You qualify for <strong>free shipping!</strong></p>
        </div>


        {/* =================================
            CART PRODUCTS
        ================================= */}

        <div className="cart-items">

          {cartItems.length === 0 ? (
            <div className="empty-cart">

              <div className="empty-cart-icon">🛍</div>

              <h3>Your cart is empty</h3>
              <p>Add something beautiful to your cart.</p>
              <button type="button" onClick={() => setIsCartOpen(false)}>CONTINUE SHOPPING</button>
            </div>
               ) : (
               cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                {/* IMAGE */}

                <div className="cart-item-image">
                  <img src={item.image} alt={item.name}/>
                </div>


                {/* INFORMATION */}

                <div className="cart-item-content">
                  <h3>{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>

                  <div className="cart-item-price">
                    <span>Rs. {item.price.toLocaleString()}</span>
                  </div>


                  {/* QUANTITY */}

                  <div className="cart-item-bottom">
                    <div className="cart-quantity">
                      <button type="button" onClick={() => decreaseQuantity(item.id)}>−</button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() =>increaseQuantity(item.id)}>+</button>
                    </div>


                    {/* REMOVE */}

                <button type="button" className="remove-cart-item" onClick={() => removeItem(item.id)} aria-label="Remove product">×
                </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>


        {/* =================================
            CART FOOTER
        ================================= */}

        {cartItems.length > 0 && (

          <div className="cart-drawer-footer">
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Subtotal:</span>
                <strong>Rs. {subtotal.toLocaleString()}</strong>
              </div>


              <div className="cart-summary-row">
                <span>Total:</span>
                <strong className="cart-total">Rs. {total.toLocaleString()}</strong>
              </div>
            </div>


            {/* CHECKOUT */}

            <button type="button" className="checkout-button" onClick={() => navigate("/Checkout", {
                    state: { product: cartItems[0], quantity: totalItems, subtotal, shipping, total,},
                  })}>CHECKOUT</button>

            {/* VIEW CART */}

            <button type="button" className="view-cart-button" onClick={() => { setIsCartOpen(false); navigate("/Cart")}}>VIEW CART</button>
          </div>
          )}

      </aside>
    </>
  );
}

export default CartProducts;