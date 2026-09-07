import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../SummerCollections/data/SummerProducts";
import "./ProductDetails.css";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  // Temporary mock to create a gallery using the single product image 3 times
  const productImages = product.images?.length ? product.images : [product.image];

  const subtotal = product.price * quantity;
  const shipping = 0;
  const total = subtotal + shipping;

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleWhatsAppOrder = () => {
    const phoneNumber = "923XXXXXXXXX";

    const message = `Hello, I want to order:

    Product: ${product.name}
    Category: ${product.category}
    Quantity: ${quantity}
    Price per item: Rs. ${product.price.toLocaleString()}
    Subtotal: Rs. ${subtotal.toLocaleString()}
    Shipping: Free
    Total: Rs. ${total.toLocaleString()}
    Product ID: ${product.id}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="product-details-page page-enter">
      <section className="product-details-section">
        <div className="container">
          <div className="product-details-grid">
            {/* Left Gallery */}
            <div className="product-gallery product-gallery-enter">
              <div className="product-thumbnails">
                <button className="gallery-arrow" type="button" onClick={() => setActiveImage(activeImage === 0 ? productImages.length - 1 : activeImage - 1,)}>↑</button>

                {productImages.map((image, index) => (
                  <button type="button" key={index}
                    className={`thumbnail-button ${activeImage === index ? "active" : ""}`} onClick={() => setActiveImage(index)}>
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}

                <button className="gallery-arrow" type="button" onClick={() =>
                    setActiveImage( activeImage === productImages.length - 1 ? 0 : activeImage + 1,)
                  }>↓</button>
              </div>

              <div className="main-product-image">
                <span className="product-sale-badge">SALE</span>
                <img src={productImages[activeImage]} alt={product.name} />

                <button className="image-navigation prev" type="button" onClick={() =>
                    setActiveImage( activeImage === 0 ? productImages.length - 1 : activeImage - 1,)
                }>←</button>

                <button className="image-navigation next" type="button" onClick={() => setActiveImage(
                      activeImage === productImages.length - 1 ? 0 : activeImage + 1,)
                  }>→</button>
              </div>
            </div>

            {/* Right Information */}
            <div className="product-information product-info-enter">
              <p className="product-category">{product.category}</p>
              <h1 className="product-title">{product.name}</h1>

              <div className="product-price">
                <span className="old-price">Rs. {product.oldPrice.toLocaleString()}</span>
                <span className="current-price">Rs. {product.price.toLocaleString()}</span>
              </div>

              <div className="quantity-section">
                <label>Quantity:</label>
                <div className="quantity-control">
                  <button type="button" onClick={decreaseQuantity}>−</button>
                  <span>{quantity}</span>
                  <button type="button" onClick={increaseQuantity}>+</button>
                </div>
              </div>

              <div className="product-actions product-actions-enter">
                <button type="button" className="add-cart-button" onClick={() => addToCart(product, 1)}>ADD TO CART</button>

                <button type="button" className="buy-now-button" onClick={() =>
                 navigate("/Checkout", { state: { product, quantity, subtotal, shipping, total },})
                  }>BUY IT NOW</button>

                <button type="button" className="whatsapp-button" onClick={handleWhatsAppOrder}>
                  <i className="bi bi-whatsapp"></i> ORDER VIA WHATSAPP
                </button>
              </div>

              <div className="delivery-box">
                <div className="delivery-header">
                  <div className="delivery-check">✓</div>
                  <div>
                    <h3>Cash on Delivery available nationwide</h3>
                    <p>Pay when you receive your order</p>
                  </div>
                </div>

                <div className="delivery-features">
                  <div>
                    <span className="feature-icon">🚚</span>
                    <strong>2–4 Days</strong>
                    <small>Pakistan-wide</small>
                  </div>
                  <div>
                    <span className="feature-icon">↻</span>
                    <strong>7-Day Exchange</strong>
                    <small>Hassle-free</small>
                  </div>
                  <div>
                    <span className="feature-icon">📦</span>
                    <strong>Free delivery</strong>
                    <small>All across Pakistan</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
