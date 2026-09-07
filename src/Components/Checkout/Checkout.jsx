import { useState } from "react";
import "./Checkout.css";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const checkoutData = location.state;

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  if (!checkoutData?.product) {
    return (
      <div className="checkout-page">
        <div className="checkout-form-container">
          <h1 className="checkout-logo">LUXÉ.</h1>
          <p>Your checkout session has expired. Please select a product again.</p>
        </div>
      </div>
    );
  }

  const { product, quantity, subtotal, shipping, total } = checkoutData;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({...previous,[name]: value,}));

    setErrors((previous) => ({...previous,[name]: "",}));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your first name.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Please enter your last name.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter your address.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleCompleteOrder() {
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    navigate("/order-confirmation", {
      state: {
        product,
        quantity,
        subtotal,
        shipping,
        total,
        customer: formData,
      },
    });
  }

  return (
    <div className="checkout-page">
      <div className="container-fluid">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-12 col-lg-6 checkout-left">
            <div className="checkout-form-container">

              <a className="navbar-brand brand-logo me-4" href="#">
                LUXÉ<span className="brand-dot">.</span>
              </a>

              {/* Contact */}
              <div className="checkout-section">
                <div className="section-heading">
                  <h3 className="cont">Contact</h3>

                  <p>Already have an account? <span>Sign in</span></p>
                </div>

                <input type="email" name="email" className={`form-control checkout-input ${ errors.email ? "input-error" : "" }`}
                  placeholder="Email or mobile phone number" value={formData.email} onChange={handleChange}/>

                {errors.email && (
                  <small className="field-error">{errors.email}</small>
                )}
              </div>

              {/* Payment */}
              <div className="checkout-section">
                <h3>Payment</h3>

                <p className="section-description">
                  All transactions are secure and encrypted.
                </p>

                <div className="payment-method">
                  <span>Cash Upon Delivery (COD)</span>
                </div>
              </div>

              {/* Billing */}
              <div className="checkout-section">
                <h3>Billing address</h3>

                <select className="form-select checkout-input">
                  <option>Pakistan</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>

                {/* Names */}
                <div className="row mt-3">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <input type="text" name="firstName" className={`form-control checkout-input ${ errors.firstName ? "input-error" : "" }`}
                      placeholder="First name" value={formData.firstName} onChange={handleChange}/>

                    {errors.firstName && (<small className="field-error">{errors.firstName}</small>)}
                  </div>

                  <div className="col-12 col-md-6">
                    <input type="text" name="lastName" className={`form-control checkout-input ${ errors.lastName ? "input-error" : "" }`}
                      placeholder="Last name" value={formData.lastName} onChange={handleChange}/>

                    {errors.lastName && (<small className="field-error">{errors.lastName}</small>)}
                  </div>
                </div>

                {/* Address */}
                <input type="text" name="address" className={`form-control checkout-input mt-3 ${ errors.address ? "input-error" : "" }`}
                  placeholder="Address" value={formData.address} onChange={handleChange}/>

                {errors.address && (
                  <small className="field-error">{errors.address}</small>)}

                {/* City */}
                <div className="row mt-3">
                  <div className="col-12 col-md-6">
                    <input type="text" name="city" className={`form-control checkout-input ${ errors.city ? "input-error" : "" }`}
                      placeholder="City" value={formData.city} onChange={handleChange}/>

                    {errors.city && (
                      <small className="field-error">{errors.city}</small>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <input type="tel" name="phone" className={`form-control checkout-input mt-3 ${ errors.phone ? "input-error" : "" }`}
                  placeholder="Phone" value={formData.phone} onChange={handleChange}/>

                {errors.phone && (
                  <small className="field-error">{errors.phone}</small>
                )}
              </div>

              {/* Complete Order */}
              <button type="button" className="complete-order-btn" onClick={handleCompleteOrder}>Complete Order</button>

              <div className="checkout-footer">
                <span>Refund policy</span>
                <span>Shipping</span>
                <span>Privacy policy</span>
                <span>Terms of service</span>
                <span>Contact</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-lg-6 checkout-right">
            <div className="order-summary">

              <h3 className="order-summary-title">Order Summary</h3>

              <div className="order-product">

                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="order-product-image"/>

                  <span className="product-quantity">
                    {quantity}
                  </span>
                </div>

                <div className="order-product-info">
                  <h5>{product.name}</h5>
                  <p>{product.category}</p>
                </div>

                <div className="order-product-price">
                  Rs. {product.price.toLocaleString()}
                </div>

              </div>

              <hr />

              <div className="summary-row">
                <span>Subtotal</span>
                <span>
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `Rs. ${shipping.toLocaleString()}`}
                </span>
              </div>

              <hr />

              <div className="total-row">
                <span>Total</span>

                <div>
                  <small>PKR</small>
                  <strong>
                    {total.toLocaleString()}
                  </strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;