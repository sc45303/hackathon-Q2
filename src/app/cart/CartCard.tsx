// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import React from "react";
// import QuantitySelectorCart from "./QuantitySelector";
// import { RiDeleteBinFill } from "react-icons/ri";

// const CartCard = ({
//   src,
//   title,
//   price,
//   size,
// }: {
//   src: string;
//   title: string;
//   price: number;
//   size: string;
// }) => {
//   return (
//     <div className="flex p-10 w-full sm:px-6 flex-col space-y-4 sm:space-y-6 rounded-[20px] border border-black/10">
//       {/*image  */}
//       <Image
//         src={src}
//         alt={title}
//         width={80}
//         height={80}
//         className="W-[100px] h-[100px] "
//       />
//       {/* some info */}
//       <div className="flex px-5 justify-between  w-full  items-center space-x-4">
//         <div>
//           {/* title */}
//           <h2 className="text-sm font-Bold leading-none line-clamp-1">
//             {title}
//           </h2>
//           {/* size */}
//           <p className="mt-2 text-sm text-gray-600 font-satoshi leading-none line-clamp-1">
//             <span> size:&nbsp;{size}</span>
//           </p>
//           <p className="mt-2 text-sm text-gray-600 font-satoshi leading-none line-clamp-1">
//             <span> color:&nbsp;{size}</span>
//           </p>
//           <div className="mt-2 flex items-center font-satoshi" >
//             <h3>
//              price: &#36;{price}
//             </h3>
//           </div>
//           {/* quantity */}
//           <div className="mt-2 flex items-center">
//             <button className="  ">
//               <QuantitySelectorCart />
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* price and dlt */}
//       <div>
//         <span className="text-red-600">
//         <RiDeleteBinFill  />

//         </span>
//       </div>
//     </div>
//   );
// };

// export default CartCard;








// import Image from "next/image";
// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import QuantitySelectorCart from "./QuantitySelector";


// const CartCard = ({
//   src,
//   title,
//   price,
//   size,
// }: {
//   src: string;
//   title: string;
//   price: number;
//   size: string;
// }) => {
//   return (
//     <div
//        className="pb-20 font-satoshi">
//         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black uppercase mb-5 md:mb-8">
//             Your Cart
//           </h2>
//           <div className="flex flex-col lg:flex-row gap-5">
//             <div className="w-full flex flex-col gap-4 p-4 md:p-6 bg-white shadow rounded-lg border border-gray-200 relative">
//               {/*image  */}
//               <Image
//                 src={src}
//                 alt={title}
//                 width={80}
//                 height={80}
//                 className="W-[100px] h-[100px]  absolute"
//               />
//               <div >
              
              
//                 <h4 className="font-medium text-base sm:text-lg items-center px-28">
//                   {title}
//                 </h4>
//                 <p className="text-sm text-gray-500 px-28">
                  
//                  size : {size}
//                 </p>
//                 <p className="font-satoshi mt-2 px-28 ">
                 
//                 price:  {price}
//                 </p>
//               <div>
//               </div>
//               </div>
//               <div className="">

//               <QuantitySelectorCart/>
//               </div>
//             </div>
//              {/* Order Summary */}
//           <div className="w-full lg:w-1/3 flex flex-col gap-6 p-6 bg-white shadow rounded-lg border border-gray-200">
//             <h6 className="text-lg md:text-xl font-semibold">Order Summary</h6>
//              <div className="flex flex-col gap-4">
//                <div className="flex items-center justify-between">
//                  <span className="text-gray-500">Subtotal</span>
//                  <span className="font-medium">$565</span>
//                </div>
//                <div className="flex items-center justify-between">
//                  <span className="text-gray-500">Discount (-20%)</span>
//                  <span className="font-medium text-red-500">-$113</span>
//                </div>
//                <div className="flex items-center justify-between">
//                  <span className="text-gray-500">Delivery Fee</span>
//                  <span className="font-medium">Free</span>
//                </div>
//                <hr className="border-gray-300" />
//                <div className="flex items-center justify-between">
//                  <span className="text-lg font-medium">Total</span>
//                  <span className="text-xl font-bold">$467</span>
//                </div>
//            </div>
//            <div className="flex flex-col sm:flex-row gap-3">
//              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full">
//                <MdOutlineLocalOffer className="text-gray-500 text-2xl" />
//                <input
//                  type="text"                  placeholder="Add promo code"                  className="bg-transparent placeholder-gray-400 px-2 py-1 w-full outline-none"
//                  />
//                </div>
//                <button className="bg-black text-white rounded-full px-6 py-2 w-full sm:w-auto">
//                  Apply
//                </button>
//              </div>
//              <button className="flex items-center justify-center gap-2 bg-black text-white rounded-full py-3 text-sm md:text-base font-medium transition-transform hover:scale-105">               Go to Checkout            
//             <FaArrowRight className="text-lg" />
//              </button>          
//               </div>      
//                  </div>
//           </div>
//         </div>
// )}

// export default CartCard;
