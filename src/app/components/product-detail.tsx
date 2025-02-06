"use client";

import Image from "next/image";
import { Star, ChevronDown, Minus, Plus } from "lucide-react";
import { useState } from "react";

export function ProductDetail() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="container  px-4 py-8  max-w-[1440px] mx-auto ">
      {/* Breadcrumb
      <nav className="flex items-center gap-2 text-sm mb-8 text-gray-500">
        <span>Home</span>
        <span>/</span>
        <span>Shop</span>
        <span>/</span>
        <span>Men</span>
        <span>/</span>
        <span className="text-black">T-shirts</span>
      </nav> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative bg-gray-100 rounded-lg">
            <Image
              src="/images/pic1.png"
              alt="ONE LIFE GRAPHIC T-SHIRT"
              fill
              className="object-contain p-8"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square relative bg-gray-100 rounded-lg cursor-pointer"
              >
                <Image
                  src=""
                  alt={`Product view ${i}`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-600">(4.5/5)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold">$260</span>
            <span className="text-xl text-gray-400 line-through">$300</span>
            <span className="text-red-500 text-sm">-45%</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            This graphic t-shirt is perfect for any occasion. Crafted from
            high-quality and sustainable fabric, it offers superior comfort and
            style.
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Select Colors</h3>
            <div className="flex gap-3">
              {["bg-olive-800", "bg-navy-800", "bg-black"].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full ${color} border-2 border-transparent hover:border-black`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="font-medium mb-3">Choose Size</h3>
            <div className="grid grid-cols-4 gap-3">
              {["Small", "Medium", "Large", "XL Large"].map((size) => (
                <button
                  key={size}
                  className="py-2 px-4 border rounded-lg hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center border rounded-lg">
              <button className="p-3 hover:bg-gray-100">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-6">1</span>
              <button className="p-3 hover:bg-gray-100">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button className="flex-1 bg-black text-white py-4 rounded-full hover:bg-black/90">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex gap-8 border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === "details"
                ? "border-b-2 border-black font-bold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "reviews"
                ? "border-b-2 border-black font-bold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Rating & Reviews
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "faq"
                ? "border-b-2 border-black font-bold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab("faq")}
          >
            FAQs
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === "details" && (
            <div>
              <h3 className="font-bold mb-4">Product Description</h3>
              <p className="text-gray-600">
                Detailed information about the product would go here, including
                materials, care instructions, and other relevant details.
              </p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="font-medium">John Doe</span>
                  </div>
                  <p className="text-gray-600">
                    Great product! The quality is excellent and the fit is
                    perfect.
                  </p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "faq" && (
            <div>
              <div className="border-b pb-4">
                <button className="flex items-center justify-between w-full">
                  <span className="font-medium">
                    What is your return policy?
                  </span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              <div className="border-b pb-4">
                <button className="flex items-center justify-between w-full">
                  <span className="font-medium">
                    How long does shipping take?
                  </span>
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
