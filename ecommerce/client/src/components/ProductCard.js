import React from "react";

function ProductCard({ title, image, alt, description }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;