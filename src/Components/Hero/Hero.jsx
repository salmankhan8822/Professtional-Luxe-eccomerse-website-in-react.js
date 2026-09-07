import "./Hero.css";
import heroImages from "../data/images";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 


function Hero() {

  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setAnimating] = useState(false);

  const nextImage = () => {
    setAnimating(true);

    setTimeout(() => {
      setCurrentSlide((prev) => prev === heroImages.length - 1 ? 0 : prev + 1);
      setAnimating(false);
    }, 500);
  };


    const previousImage = () => {
    setAnimating(true);

    setTimeout(() => {
      setCurrentSlide((prev) => prev === 0 ? heroImages.length - 1 : prev - 1);
      setAnimating(false);
    }, 500);
  };

  return (
    <section className="hero-section">
      <div className="container-fluid p-0">
        <div className="hero-wrapper position-relative overflow-hidden">

          {/* Hero Image */}
         
           <img src={heroImages[currentSlide]} alt="Women's Fashion" className={`hero-image ${isAnimating ? "slide-out" : "slide-in"}`}/>
        

          {/* Overlay */}
          <div className="hero-overlay"></div>
          {/* Content */}
           <div className="container position-relative h-100">
           <div className="row align-items-center h-100 justify-content-center justify-content-lg-start">
            <div className="col-12 col-sm-11 col-md-9 col-lg-7 col-xl-6">
              <div className="hero-content text-white text-center text-lg-start">

        <p className="hero-label">NEW SEASON 2026</p>

        <h1 className="hero-title">Style That
          <br />
          Speaks For You
        </h1>

        <p className="hero-description">
          Discover effortless elegance with our latest collection
          of modern women's fashion.
        </p>

        <div className="hero-buttons">
          <a href="#" className="hero-btn" onClick={() => navigate("/summer")}>Shop Collection</a>

          <a href="#" className="hero-link" onClick={() => navigate("/summer")}>Explore More<span>→</span></a>
        </div>

      </div>
    </div>
  </div>
</div>

          {/* Previous Button */}
          <button className="hero-arrow hero-arrow-left" aria-label="Previous slide"
          onClick={previousImage}>←</button>

          {/* Next Button */}
          <button className="hero-arrow hero-arrow-right" aria-label="Next slide"
           onClick={nextImage}>→</button>

          {/* Bottom Area */}
          <div className="hero-bottom">

            {/* Indicators */}
           <div className="hero-indicators">

            <span className={`hero-indicator ${ currentSlide === 0 ? "active" : ""}`}></span>
            <span className={`hero-indicator ${ currentSlide === 1 ? "active" : ""}`}></span>
            <span className={`hero-indicator ${ currentSlide === 2 ? "active" : ""}`}></span>
            <span className={`hero-indicator ${ currentSlide === 3 ? "active" : ""}`}></span>
            <span className={`hero-indicator ${ currentSlide === 4 ? "active" : ""}`}></span>
           </div>

            {/* Counter */}
            <div className="hero-counter">
              <span className="current-slide">{currentSlide}</span>
              <span className="counter-line"></span>
              <span>04</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;