"use client";
import React, { useEffect, useState } from "react";

import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-07-11",
  useCdn: true,
});

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    assest: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"]{
        _id,
        title,
        price,
        decription,
        discountPercentage,
       "imageUrl": productImage.asset->url,
        tags
      }`;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  // const truncateDescription = (description: string) => {
  //   return description.length > 100
  //     ? description.slice(0, 100) + "..."
  //     : description;
  // };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-100 mt-4 mb-4">
        {" "}
        products From Api data
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-lg transition duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-100 font-semibold">
                    {product.price}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-green-500 text-sm ">
                      {product.discountPercentage} % OFF
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap ga-p2 ">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* add to cart functionality */}

              <button
                className=" mt-4 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* cart summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-600">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4 mt-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg"
              >
                <div>
                  <p className="text-md text-slate-200 font-semibold ">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 text-center">
            Your cart is empty{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
