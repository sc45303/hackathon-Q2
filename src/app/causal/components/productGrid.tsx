import ProductCard from "@/app/components/productCard";
import React from "react";

const products = [
  {
    image: "/images/pic1.png",
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: "/images/pic2.png",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
  },
  {
    image: "/images/pic3.png",
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
  },
  {
    image: "/images/pic1.png",
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: "/images/pic2.png",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
  },
  {
    image: "/images/pic3.png",
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
  },
  {
    image: "/images/pic1.png",
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
  },
  {
    image: "/images/pic2.png",
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
  },
  {
    image: "/images/pic3.png",
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
  },
];

const ProductGrid = () => {
  return (
    <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          data={{
            title: product.name,
            srcUrl: product.image,
            rating: product.rating,
            price: product.price,
            discount: product.discount || null,
            originalPrice: product.originalPrice || null,
            priceAfterDiscount: product.discount
              ? product.price - product.discount
              : null,
            category: "default-category", // Replace with actual category if available
            slug: "default-slug", // Replace with actual slug if available
          }}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
