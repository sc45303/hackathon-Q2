"use client";

import { FaArrowRight } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import Image from "next/image";
import React from "react";
import { TbBasketExclamation } from "react-icons/tb";
import Link from "next/link";
import { useCart } from "./cartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartCount } = useCart();

  // Calculate subtotal, discount, and total
  const subtotal = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <main className="pb-0 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl uppercase mb-6 font-Bold">
          Your Cart ({cartCount}) items
        </h2>
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
          {/* Left Section: Cart Items */}
          <div className="w-full lg:w-2/3 bg-gray-50 p-6 rounded-lg shadow-md">
            {cartItems.length > 0 ? (
              cartItems.map((product) => (
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
                  <div className="text-right justify-between">
                    <p className="font-semibold text-lg">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2 space-x-2 bg-gray-100 border rounded-full font-satoshi">
                      <button
                        onClick={() =>
                          updateQuantity(
                            product.id,
                            Math.max(1, product.quantity - 1)
                          )
                        }
                        className="px-2 py-1"
                      >
                        -
                      </button>
                      <span className="px-2 font-Bold">{product.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(product.id, product.quantity + 1)
                        }
                        className="px-2 py-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <RiDeleteBinLine size={20} />
                  </button>
                </div>
              ))
            ) : (
              <div className="flex items-center flex-col text-gray-300 py-10">
                <TbBasketExclamation strokeWidth={1} className="text-6xl" />
                <span className="block mb-4">Your shopping cart is empty.</span>
                <Link href="/" className="rounded-full w-24 text-center">
                  Shop
                </Link>
              </div>
            )}
          </div>

          {/* Right Section: Order Summary */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount (20%)</span>
                <span className="font-semibold text-red-600">
                  -${discount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
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
      </div>
    </main>
  );
};

export default CartPage;

// "use client";

// import { useCart } from "./cartContext";

// const CartPage = () => {
//   const { cartItems } = useCart();

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       {cartItems.map((item) => (
//         <div key={item.id}>
//           <p>{item.name}</p>
//           <p>Quantity: {item.quantity}</p>
//           <p>Price: ${item.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartPage;
