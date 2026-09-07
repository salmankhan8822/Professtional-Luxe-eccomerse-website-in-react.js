import "./Shop.css";

function ShopByCategory() {
  return (
    <section className="shop-category-section">

      {/* Heading */}
      <div className="container-fluid">
        <div className="shop-category-heading">
          <p className="category-eyebrow">EXPLORE OUR COLLECTION</p>
          <h2>Shop By Category</h2>
          <p className="category-subtitle">
            Discover styles made for every mood and every moment.
          </p>
        </div>
      </div>

      {/* Moving Categories */}
      <div className="category-marquee">
        <div className="category-track">

          {/* First Set */}
          <div className="category-card">
            <img src="https://kashaf.pk/cdn/shop/files/website_slider_vertical_sizes-05_jpg_1880x.jpg?v=1769935665"/>
          </div>

          <div className="category-card">
            <img src="https://kashaf.pk/cdn/shop/files/website_slider_vertical_sizes-03_jpg_1880x.jpg?v=1769935667"/>
          </div>

          <div className="category-card">
            <img src="https://kashaf.pk/cdn/shop/files/website_slider_vertical_sizes-01_jpg_1880x.jpg?v=1769935664"/>
          </div>

          <div className="category-card">
            <img src="https://kashaf.pk/cdn/shop/files/website_slider_vertical_sizes-02_jpg_1880x.jpg?v=1769935659"/>
          </div>

          <div className="category-card">
            <img src="https://kashaf.pk/cdn/shop/files/website_slider_vertical_sizes-04_jpg_1880x.jpg?v=1769935662"/>
          </div>

          {/* Duplicate Set for Seamless Marquee */}
          <div className="category-card">
            <img src="https://kashaf.pk/cdn/shop/files/301810882_450539233789300_4662185428200661291_n.progressive_1117a2ec-95b1-4224-b7d1-b875702c8687_570x.jpg?v=1743249401"/>
          </div>

          <div className="category-card">
            <img src="https://kashaf.pk/cdn/shop/files/12_1800x1800_b64c228e-fee6-4b50-b55c-7a79f5c77524_1170x.webp?v=1743244682"/>
          </div>

        </div>
      </div>

    </section>
  );
}

export default ShopByCategory;