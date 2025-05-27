import React from "react";
import ProductCard from "./ProductCard";

const productData = [
  {
    title: "Tropical Vining Shrub",
    image: "/image1.jpg",
    alt: "Product Image 1",
    description:
      "We offer a stunning selection of tropical and semi-tropical vines from the Pacific Islands, Caribbean, Asia, and South America. Species like Hoyas, Passion Flowers, Bougainvilleas, and Jasmines make striking additions to any garden, showcasing vibrant blooms and captivating fragrances.",
  },
  {
    title: "Annuals",
    image: "/image2.jpg",
    alt: "Product Image 2",
    description:
      "Brighten your garden with our stunning selection of annuals! These vibrant, fast-growing plants bring instant color and charm to any outdoor space. Perfect for flower beds, containers, or hanging baskets, our annuals include a wide variety of blooms to suit every style and season.",
  },
  {
    title: "Fruit Trees",
    image: "/image3.jpg",
    alt: "Product Image 3",
    description:
      "Explore our diverse collection of tropical fruiting plants, including Avocados, Mangos, Vanilla Bean Orchids, Coffee, Tea, and Bananas, along with unique offerings like Curry Leaf, Dragon Fruit, Star Fruit, Guavas, and tropical Cherries. Many varieties thrive in containers for northern zones or can be planted directly in warmer climates.",
  },
];

function ProductSection() {
  return (
    <section className="columns">
      {productData.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          image={product.image}
          alt={product.alt}
          description={product.description}
        />
      ))}
    </section>
  );
}

export default ProductSection;