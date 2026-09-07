import { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="luxe-footer">
      {/* Newsletter strip */}
      <div className="luxe-footer-newsletter">
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-lg-6">
              <h5 className="mb-1">Join the Luxe Circle</h5>
              <p className="mb-0 text-muted-light">
                Subscribe for early access to new arrivals, exclusive offers & style edits.
              </p>
            </div>
            <div className="col-lg-6">
              <form className="d-flex luxe-subscribe-form" onSubmit={handleSubscribe}>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" className="form-control" aria-label="Email address"/>
                <button className="btn luxe-btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="luxe-footer-main">
        <div className="container">
          <div className="row gy-4">
            {/* Brand */}
            <div className="col-6 col-md-3">
              <h4 className="luxe-brand mb-3">Luxe</h4>
              <p className="text-muted-light mb-4">
                Contemporary clothing designed for everyday elegance —
                thoughtfully made, effortlessly worn.
              </p>
              <div className="luxe-social">
                <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" aria-label="Pinterest"><i className="bi bi-pinterest"></i></a>
              </div>
            </div>

            {/* Shop */}
            <div className="col-6 col-md-3">
              <h6 className="luxe-heading mb-3">Shop</h6>
              <ul className="list-unstyled luxe-links">
                <li><Link to="/summer">New Arrivals</Link></li>
                <li><Link to="/winter">Women</Link></li>
                <li><Link to="/summer">Sale</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="col-6 col-md-3">
              <h6 className="luxe-heading mb-3">Customer Service</h6>
              <ul className="list-unstyled luxe-links">
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                <li><Link to="/refund-policy">Returns & Refunds</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-6 col-md-3">
              <h6 className="luxe-heading mb-3">Get In Touch</h6>
              <ul className="list-unstyled luxe-links luxe-contact">
                <li><i className="bi bi-geo-alt"></i> Narowal, Punjab, Pakistan</li>
                <li><i className="bi bi-envelope"></i> support@luxe.com</li>
                <li><i className="bi bi-telephone"></i> +92 300 0000000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="luxe-footer-bottom">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0">© {new Date().getFullYear()} Luxe. All Rights Reserved.</p>
          <div className="luxe-payments">
            <i className="bi bi-credit-card-2-front"></i>
            <i className="bi bi-paypal"></i>
            <i className="bi bi-wallet2"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;