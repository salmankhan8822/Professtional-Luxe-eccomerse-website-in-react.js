import { useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state;

  if (!order) {
    return (
      <div className="order-confirmation-page">
        <div className="confirmation-card">
          <h2>No order found</h2>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    );
  }

  const { product, quantity, total, customer } = order;

  return (
    <div className="order-confirmation-page">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>

        <h1>Order Confirmed!</h1>

        <p className="thank-you">
          Thank you for your order, {customer?.firstName || "customer"}.
        </p>

        <div className="order-details">
          <div className="product-row">
            <img src={product.image} alt={product.name} className="confirmation-product-image"/>

            <div>
              <h3>{product.name}</h3>
              <p>Quantity: {quantity}</p>
            </div>
          </div>

          <div className="total-row">
            <span>Total</span>
            <strong>Rs. {total.toLocaleString()}</strong>
          </div>
        </div>

        <p className="success-message">
          Your order has been received successfully.
        </p>

        <button className="continue-shopping-btn" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
