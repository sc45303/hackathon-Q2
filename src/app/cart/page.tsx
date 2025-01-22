"use client";

import { FaArrowRight } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import Image from "next/image";
import React from "react";
import { TbBasketExclamation } from "react-icons/tb";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Gradient Graphic T-shirt",
    image: "/images/pic1.png",
    size: "Large",
    color: "White",
    price: 145,
  },
  {
    id: "2",
    name: "Checkered Shirt",
    image: "/images/pic2.png",
    size: "Medium",
    color: "Red",
    price: 180,
  },
  {
    id: "3",
    name: "Skinny Fit Jeans",
    image: "/images/pic3.png",
    size: "Large",
    color: "Blue",
    price: 240,
  },
];

const CartPage = () => {
  const subtotal = products.reduce((acc, product) => acc + product.price, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <main className="pb-20 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold uppercase mb-6 font-Bold">
          Your Cart
        </h2>
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
          {/* Left Section: Cart Items */}
          <div className="w-full lg:w-2/3 bg-gray-50 p-6 rounded-lg shadow-md">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between py-4 border-b last:border-none"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-gray-600 text-sm">
                      Size: {product.size}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Color: {product.color}
                    </p>
                  </div>
                </div>
                <div className=" text-right justify-between  ">
                  <p className="font-semibold text-lg justify-between">
                    ${product.price}
                  </p>
                  <div className="flex items-center mt-2 space-x-2 bg-gray-100 border rounded-full font-satoshi">
                    <button className="px-2 py-1">-</button>
                    <span className="px-2 font-Bold">1</span>
                    <button className="px-2 py-1">+</button>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 ml-4">
                  <RiDeleteBinLine size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Right Section: Order Summary */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount (20%)</span>
                <span className="font-semibold text-red-600">-${discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold">${deliveryFee}</span>
              </div>
              <hr className="border-t my-4" />
              <div className="flex justify-between">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center mt-4">
                <MdOutlineLocalOffer className="text-gray-500 text-2xl" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="ml-2 px-4 py-2 w-full border rounded-lg focus:outline-none"
                />
                <button
                  type="button"
                  className="ml-2 bg-black text-white px-4 py-2 rounded-lg"
                >
                  Apply
                </button>
              </div>
              <button
                type="button"
                className="mt-6 w-full bg-black text-white py-3 rounded-lg flex items-center justify-center"
              >
                Go to Checkout <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col text-gray-300 mt-32">
          <TbBasketExclamation strokeWidth={1} className="text-6xl" />
          <span className="block mb-4">Your shopping cart is empty.</span>
          <button className="rounded-full w-24" asChild>
            <Link href="/">Shop</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
