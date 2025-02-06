// "use client";

// import { FaArrowRight } from "react-icons/fa6";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import Image from "next/image";
// import React, { useState } from "react";
// import { TbBasketExclamation } from "react-icons/tb";
// import Link from "next/link";
// import { useCart } from "./cartContext";
// import { CheckOut } from "@/actions/CheckOut";

// // import { CheckOut } from "@/actions/CheckOut"; // Import the CheckOut action

// const CartPage = () => {
//   const { cartItems, removeFromCart, updateQuantity, cartCount } = useCart();
//   const [showForm, setShowForm] = useState(false);

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleCheckout = async (e: any) => {
//     e.preventDefault(); // Prevent default form submission
//     try {
//       const customerInfo = {
//         name: e.target.name.value,
//         email: e.target.email.value,
//         phone: e.target.phone.value,
//         address: e.target.address.value,
//       };

//       // Call the CheckOut function with cart items and customer info
//       const result = await CheckOut(cartItems, customerInfo);

//       //  orderId and total from the result
//       const orderId = result._id;
//       const total = result.totalAmount;

//       // Redirect to the success page

//       window.location.href = `/success?total=${total}&orderId=${orderId}`;

//       // alert("Order placed successfully!");
//       console.log("Order created in Sanity:", result);
//       setShowForm(false); // Hide the form after submission
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place the order. Please try again.");
//     }
//   };

//   // Calculate subtotal, discount, and total
//   const subtotal = cartItems.reduce(
//     (acc, product) => acc + product.price * product.quantity,
//     0
//   );
//   const discount = subtotal * 0.2;
//   const deliveryFee = 15;
//   const total = subtotal - discount + deliveryFee;

//   return (
//     <main className="pb-0 bg-white mt-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl md:text-4xl uppercase mb-6 font-bold">
//           Your Cart ({cartCount}) items
//         </h2>
//         <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
//           {/* Left Section: Cart Items */}
//           <div className="w-full lg:w-2/3 bg-gray-50 p-6 rounded-lg shadow-md">
//             {cartItems.length > 0 ? (
//               cartItems.map((product) => (
//                 <div
//                   key={product.id}
//                   className="flex items-center justify-between py-4 border-b last:border-none"
//                 >
//                   <div className="flex items-center space-x-4 w-auto h-auto ">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       width={80}
//                       height={80}
//                       className="rounded-lg"
//                     />
//                     <div>
//                       <h3 className="font-medium text-lg">{product.name}</h3>
//                       <p className="text-gray-600 text-sm">
//                         Size: {product.size}
//                       </p>
//                       <p className="text-gray-600 text-sm">
//                         Color: {product.color}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="text-right justify-between">
//                     <p className="font-semibold text-lg">
//                       ${(product.price * product.quantity).toFixed(2)}
//                     </p>
//                     <div className="flex items-center mt-2 space-x-2 bg-gray-100 border rounded-full font-satoshi">
//                       <button
//                         onClick={() =>
//                           updateQuantity(
//                             product.id,
//                             Math.max(1, product.quantity - 1)
//                           )
//                         }
//                         className="px-2 py-1"
//                       >
//                         -
//                       </button>
//                       <span className="px-2 font-Bold">{product.quantity}</span>
//                       <button
//                         onClick={() =>
//                           updateQuantity(product.id, product.quantity + 1)
//                         }
//                         className="px-2 py-1"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(product.id)}
//                     className="text-red-500 hover:text-red-700 ml-4"
//                   >
//                     <RiDeleteBinLine size={20} />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <div className="flex items-center flex-col text-gray-300 py-10">
//                 <TbBasketExclamation strokeWidth={1} className="text-6xl" />
//                 <span className="block mb-4">Your shopping cart is empty.</span>
//                 <Link href="/" className="rounded-full w-24 text-center">
//                   Shop
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Right Section: Order Summary */}
//           <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-bold mb-4">Order Summary</h3>
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span className="font-semibold">${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Discount (20%)</span>
//                 <span className="font-semibold text-red-600">
//                   -${discount.toFixed(2)}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Delivery Fee</span>
//                 <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
//               </div>
//               <hr className="border-t my-4" />
//               <div className="flex justify-between">
//                 <span className="text-lg font-medium">Total</span>
//                 <span className="text-lg font-bold">${total.toFixed(2)}</span>
//               </div>
//               <div className="flex items-center mt-4">
//                 <MdOutlineLocalOffer className="text-gray-500 text-2xl" />
//                 <input
//                   type="text"
//                   placeholder="Add promo code"
//                   className="ml-2 px-4 py-2 w-full border rounded-lg focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   className="ml-2 bg-black text-white px-4 py-2 rounded-lg"
//                 >
//                   Apply
//                 </button>
//               </div>
//               <button
//                 onClick={() => setShowForm(true)}
//                 type="button"
//                 className="mt-6 w-full bg-black text-white py-3 rounded-lg flex items-center justify-center"
//               >
//                 Go to Checkout{" "}
//                 <FaArrowRight className="ml-2 hover:animate-pulse" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Checkout Form */}
//       {showForm && (
//         <form
//           onSubmit={handleCheckout}
//           className="mt-6 space-y-4 text-center items-start justify-start max-w-6xl mx-auto px-4"
//         >
//           <div className="space-y-2">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               // value={customerInfo.name}
//               // onChange={handleInputChange}
//               required
//               className="w-[50%]  px-4 py-2 border rounded-lg focus:outline-none"
//             />
//           </div>
//           <div className="space-y-2 ">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               // value={customerInfo.email}
//               // onChange={handleInputChange}
//               required
//               className="w-[50%] px-4 py-2 border rounded-lg focus:outline-none"
//             />
//           </div>
//           <div className="space-y-2">
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Phone
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               // value={customerInfo.phone}
//               // onChange={handleInputChange}
//               required
//               className="w-[50%] px-4 py-2 border rounded-lg focus:outline-none"
//             />
//           </div>
//           <div className="space-y-2">
//             <label
//               htmlFor="address"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Address
//             </label>
//             <textarea
//               id="address"
//               name="address"
//               // value={customerInfo.address}
//               // onChange={handleInputChange}
//               required
//               className="w-[50%] px-4 py-2 border rounded-lg focus:outline-none"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-lg"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </main>
//   );
// };

// export default CartPage;
//ai  xo

"use client";

import { FaArrowRight } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import Image from "next/image";
import React, { useState } from "react";
import { TbBasketExclamation } from "react-icons/tb";
import Link from "next/link";
import { useCart } from "./cartContext";
import { CheckOut } from "@/actions/CheckOut";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartCount } = useCart();
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckout = async (e: any) => {
    e.preventDefault();

    try {
      const customerInfo = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
      };

      const result = await CheckOut(cartItems, customerInfo);

      if (!result || !result._id || !result.totalAmount) {
        throw new Error("Invalid response from CheckOut");
      }

      const orderId = result._id;
      const total = result.totalAmount;

      router.push(`/success?total=${total}&orderId=${orderId}`);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };

  // Rest of the component...

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
        <h2 className="text-2xl md:text-4xl uppercase mb-6 font-bold">
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
                  <div className="flex items-center space-x-4 w-auto h-auto ">
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
                onClick={() => setShowForm(true)}
                type="button"
                className="mt-6 w-full bg-black text-white py-3 rounded-lg flex items-center justify-center"
              >
                Go to Checkout{" "}
                <FaArrowRight className="ml-2 hover:animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Checkout Form */}
      {showForm && (
        <form
          onSubmit={handleCheckout}
          className="mt-6 space-y-4 text-center items-start justify-start max-w-6xl mx-auto px-4"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              // value={customerInfo.name}
              // onChange={handleInputChange}
              required
              className="w-[50%]  px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div className="space-y-2 ">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              // value={customerInfo.email}
              // onChange={handleInputChange}
              required
              className="w-[50%] px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              // value={customerInfo.phone}
              // onChange={handleInputChange}
              required
              className="w-[50%] px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              // value={customerInfo.address}
              // onChange={handleInputChange}
              required
              className="w-[50%] px-4 py-2 border rounded-lg focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
};

export default CartPage;
