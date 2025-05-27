import React from "react";

function Banner() {
  return (
    <article
      id="banner"
      className="banner"
      style={{
        backgroundImage: "url('/promo-banner.jpg')"
      }}
    >
      <h1 className="banner-title z-index-xs">30% Holiday Sale!</h1>
      <div className="banner-content z-index-xs">
        <p className="banner-text">
          Shop now and enjoy exclusive discounts on our nursery collection!{" "}
          <strong className="strong-yellow">Transform Your Garden Today!</strong>
        </p>
        <p className="banner-text">
          Explore vibrant blooms, lush greenery, and unique tropical plants.
        </p>
      </div>
    </article>
  );
}

export default Banner;