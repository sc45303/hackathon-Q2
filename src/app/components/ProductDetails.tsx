"use client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

import { Montserrat } from "next/font/google";

import { urlFor } from "@/sanity/lib/image";

import { CiHeart } from "react-icons/ci";

import { FaEye, FaStar } from "react-icons/fa";

import { IoCartOutline } from "react-icons/io5";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface IProducts {
  id: string;

  heading: string;

  subheading: string;

  image: {
    asset: {
      _ref: string;

      _type: string;
    };
  };

  price: {
    originalPrice: string;

    discountedPrice: string;
  };
}

const ProductDetails = ({ productId }: { productId: string }) => {
  const [result, setResult] = useState<IProducts | null>(null);

  const [selectedColor, setSelectedColor] = useState<string>("");

  const [selectedSize, setSelectedSize] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);

  const colors = [
    { name: "blue", class: "bg-myBlue" },

    { name: "green", class: "bg-myDarkGreen" },

    { name: "orange", class: "bg-myOrange" },

    { name: "dark", class: "bg-myDark" },
  ];

  const sizes = ["XSM", "SM", "MD", "LG", "XLG"];

  const handleColorChange = (colorClass: string) => {
    setSelectedColor(colorClass);
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);

      const query = `*[_type == "product" || _type == "shop" || _type == "seller"]{

id,
heading,
subheading,
image,
price{
originalPrice,
discountedPrice
},

}`;

      const data = await client.fetch(query);

      const product = data.find((item: IProducts) => item.id === productId);

      setResult(product || null);

      setLoading(false);
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          aria-label="Loading…"
        ></div>
      </div>
    );
  }

  if (!result) {
    return (
      <p
        className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
      >
        Product not found
      </p>
    );
  }

  return (
    <div className="p-8 hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={
              result.image?.asset
                ? urlFor(result.image.asset).url()
                : "/images/placeholder.jpg"
            }
            alt={`Main Image ${result.heading || "Product"}`}
            className="w-full h-auto lg:w-[450px] lg:h-[500px] rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            width={506}
            height={450}
            priority
          />
        </div>

        {/* Details Section */}

        <div className="space-y-6">
          <h1
            className={`${montserrat.className} "text-3xl font-semibold text-gray-800"`}
          >
            {result.heading}
          </h1>

          <h2
            className={`${montserrat.className} "text-lg font-medium text-gray-600"`}
          >
            {result.subheading}
          </h2>

          <div className="flex items-center space-x-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}

            <FaStar className="text-gray-300" />

            <span className="text-gray-500">(10 Reviews)</span>
          </div>

          <div className="flex space-x-4">
            <span className="text-xl font-bold text-green-600">
              ${result.price.discountedPrice}
            </span>

            <span className="line-through text-gray-500 text-lg">
              ${result.price.originalPrice}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-600">Availability:</span>

            <span className="text-green-600">In Stock</span>
          </div>

          <p className="text-gray-500 pr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            possimus cum quidem tempora sint et eaque, temporibus alias
            provident hic nobis sed velit voluptate voluptatibus, quia ullam
            esse eligendi vitae.
          </p>

          {/* Color Selection */}

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Color Family:</h3>

            <div className="flex space-x-3 mt-2">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => handleColorChange(color.class)}
                  className={`w-8 h-8 rounded-full cursor-pointer ${color.class} ${
                    selectedColor === color.class ? "ring-4 ring-blue-500" : ""
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">Size Family:</h3>

            <div className="flex space-x-4 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={`px-4 py-2 rounded border text-sm font-medium transition ${
                    selectedSize === size
                      ? "bg-[#b0b35d] text-white border-[#b0b35d]"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}

          <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-myBlue text-white rounded hover:bg-blue-600 transition">
              Select Options
            </button>

            <button className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
              <CiHeart className="text-gray-600" />
            </button>

            <button className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
              <IoCartOutline className="text-gray-600" />
            </button>

            <button className="w-full sm:w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200">
              <FaEye className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
