// // pages/product/[id].tsx
// import Image from "next/image";
// import { useRouter } from "next/router";

// const ProductDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Mock product data (replace with API or dynamic data)
//   const product = {
//     id: id,
//     name: "ONE LIFE GRAPHIC T-SHIRT",
//     price: 260,
//     originalPrice: 300,
//     discount: 40,
//     rating: 4.5,
//     description:
//       "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
//     colors: ["#5B6146", "#244747", "#1C1C2E"],
//     sizes: ["Small", "Medium", "Large", "X-Large"],
//     images: [
//       "/images/pic12.png",
//       "/images/pic1.png",
//       "/images/pic3.png",
//       "/images/pic1.png",
//     ],
//   };

//   if (!id) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto px-4 py-8 font-satoshi " id="product1">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-500 mb-4">
//         <span className="hover:underline cursor-pointer">Home</span> / 
//         <span className="hover:underline cursor-pointer">Shop</span> / 
//         <span className="hover:underline cursor-pointer">Men</span> / 
//         <span className="text-black">T-shirts</span>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Images */}
//         <div>
//           <div className="aspect-square relative mb-4 border">
//             <Image
//               src={product.images[0]}
//               alt={product.name}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="flex gap-4">
//             {product.images.map((image, index) => (
//               <div
//                 key={index}
//                 className="aspect-square w-20 h-20 relative border cursor-pointer hover:scale-105 transition"
//               >
//                 <Image src={image} alt={`Thumbnail ${index}`} fill className="object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>

//           {/* Rating */}
//           <div className="flex items-center gap-2 mb-4">
//             <div className="flex items-center text-yellow-400">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <svg
//                   key={i}
//                   xmlns="http://www.w3.org/2000/svg"
//                   className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : ""}`}
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="text-sm text-gray-500">{product.rating}/5</span>
//           </div>

//           {/* Price */}
//           <div className="flex items-center gap-4 mb-4">
//             <span className="text-2xl font-bold">${product.price}</span>
//             {product.originalPrice && (
//               <span className="text-gray-400 line-through">${product.originalPrice}</span>
//             )}
//             {product.discount && (
//               <span className="text-red-500 font-bold">-{product.discount}%</span>
//             )}
//           </div>

//           <p className="text-gray-700 mb-6">{product.description}</p>

//           {/* Colors */}
//           <div className="mb-6">
//             <h3 className="font-bold mb-2">Select Colors</h3>
//             <div className="flex gap-4">
//               {product.colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className="w-8 h-8 rounded-full border cursor-pointer"
//                   style={{ backgroundColor: color }}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           {/* Sizes */}
//           <div className="mb-6">
//             <h3 className="font-bold mb-2">Choose Size</h3>
//             <div className="flex gap-4">
//               {product.sizes.map((size, index) => (
//                 <button
//                   key={index}
//                   className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border rounded-lg">
//               <button className="px-4 py-2">-</button>
//               <span className="px-4">1</span>
//               <button className="px-4 py-2">+</button>
//             </div>
//             <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
