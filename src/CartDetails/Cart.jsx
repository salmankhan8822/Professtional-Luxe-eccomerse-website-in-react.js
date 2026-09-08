import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // increase quantity

  const increaseQuantity = (id) => {
    setCartItems((prevItems) => prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // DECREASE QUANTITY

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ).filter((item) => item.quantity > 0),
    );
  };

  // REMOVE PRODUCT

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // SUBTOTAL

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0,);

  // SHIPPING

  const shipping = 0;
  const total = subtotal + shipping;

  // TOTAL ITEMS

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0,);

  return (
    <main className="cart-page">
      <div className="container">
        {/* PAGE TITLE */}

        <div className="cart-page-header">
          <p className="cart-page-label">YOUR SHOPPING BAG</p>
          <h1>Shopping Cart</h1>
          <p>
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          //  EMPTY CART

          <div className="cart-page-empty">
            <div className="empty-cart-symbol">🛍</div>

            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <a href="/summer">CONTINUE SHOPPING</a>
          </div>
        ) : (
          //  CART CONTENT
          <div className="cart-page-layout">
            {/* LEFT: PRODUCTS */}

            <div className="cart-products-section">
              <div className="cart-products-heading">
                <span>PRODUCT</span>
                <span>PRICE</span>
              </div>

              {cartItems.map((item) => (
                <div className="cart-page-item" key={item.id}>
                  {/* IMAGE */}

                  <div className="cart-page-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  {/* PRODUCT INFO */}

                  <div className="cart-page-product-info">
                    <p className="cart-page-category">{item.category}</p>
                    <h3>{item.name}</h3>
                    <p className="cart-page-price">
                      Rs. {item.price.toLocaleString()}
                    </p>

                    {/* QUANTITY */}

                    <div className="cart-page-controls">
                      <div className="cart-page-quantity">
                        <button type="button" onClick={() => decreaseQuantity(item.id)}>−</button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => increaseQuantity(item.id)}>+</button>
                      </div>

                      {/* REMOVE */}

                      <button type="button" className="cart-page-remove" onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                  </div>

                  {/* ITEM TOTAL */}

                  <div className="cart-page-item-total">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: SUMMARY */}

            <aside className="cart-page-summary">
              <h2>Order Summary</h2>
              <div className="cart-summary-line">
                <span>Subtotal</span>
                <strong>Rs. {subtotal.toLocaleString()}</strong>
              </div>

              <div className="cart-summary-line">
                <span>Shipping</span>
                <strong>Free</strong>
              </div>

              <div className="cart-summary-divider"></div>
              <div className="cart-summary-total">
                <span>Total</span>
                <strong>Rs. {total.toLocaleString()}</strong>
              </div>

              <button type="button" className="cart-page-checkout"
                onClick={() => navigate("/Checkout", {
                    state: { product: cartItems[0], quantity: totalItems, subtotal, shipping, total,},
                  })}>CHECKOUT</button>

              <div className="cart-page-note">
                <strong>✓ Free shipping</strong>

                <span>Cash on delivery available nationwide</span>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
