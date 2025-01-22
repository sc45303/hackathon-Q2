// "use client";
// import Image from "next/image";
// import { Star, StarHalf } from "lucide-react";

// import { useCart } from "../context/CartContext";
// const Arrivals = [
//   {
//     id: "1",
//     name: "T-shirt with Tape Details",
//     image: "/images/pic1.png",
//     rating: 4.5,
//     price: 120,
//     originalPrice: null,
//     discount: null,
//     description: "A stylish T-shirt with tape details for a modern look.",
//   },
//   {
//     id: "2",
//     name: "Skinny Fit Jeans",
//     image: "/images/pic2.png",
//     rating: 3.5,
//     price: 240,
//     originalPrice: 260,
//   },
//   {
//     id: "3",
//     name: "Checkered Shirt",
//     image: "/images/pic3.png",
//     rating: 4.5,
//     price: 180,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "4",
//     name: "Sleeve Striped T-shirt",
//     image: "/images/pic4.png",
//     rating: 4.5,
//     price: 130,
//     originalPrice: 160,
//   },
//   {
//     id: "5",
//     name: "Casual Cotton Shirt",
//     image: "/images/pic5.png",
//     rating: 4.5,
//     price: 150,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "6",
//     name: "Slim Fit Chinos",
//     image: "/images/pic6.png",
//     rating: 4.5,
//     price: 180,
//     originalPrice: 200,
//   },
//   {
//     id: "7",
//     name: "Casual Sneakers",
//     image: "/images/pic7.png",
//     rating: 4.5,
//     price: 180,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "8",
//     name: "Leather Belt",
//     image: "/images/pic8.png",
//     rating: 4.5,
//     price: 50,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "9",
//     name: "Classic Watch",
//     image: "/images/pic9.png",
//     rating: 4.5,
//     price: 120,
//     originalPrice: 150,
//   },
//   {
//     id: "10",
//     name: "Sunglasses",
//     image: "/images/pic10.png",
//     rating: 4.5,
//     price: 80,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "11",
//     name: "Backpack",
//     image: "/images/pic11.png",
//     rating: 4.5,
//     price: 100,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "12",
//     name: "Leather Wallet",
//     image: "/images/pic12.png",
//     rating: 4.5,
//     price: 60,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "13",
//     name: "Cotton Face Mask",
//     image: "/images/pic13.png",
//     rating: 4.5,
//     price: 10,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "14",
//     name: "Smartphone Stand",
//     image: "/images/pic14.png",
//     rating: 4.5,
//     price: 20,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "15",
//     name: "Wireless Earbuds",
//     image: "/images/pic15.png",
//     rating: 4.5,
//     price: 80,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "16",
//     name: "Portable Charger",
//     image: "/images/pic3.png",
//     rating: 4.5,
//     price: 50,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "17",
//     name: "Travel Backpack",
//     image: "/images/pic2.png",
//     rating: 4.5,
//     price: 120,
//     originalPrice: null,
//     discount: null,
//   },
//   {
//     id: "18",
//     name: "Classic Cap",
//     image: "/images/pic1.png",
//     rating: 4.5,
//     price: 40,

//   }
// ];
// function Rating({ rating }: { rating: number }) {
//   return (
//     <div className="flex items-center gap-1">
//       {[1, 2, 3, 4, 5].map((value) => {
//         if (value <= Math.floor(rating)) {
//           return <Star key={value} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
//         } else if (value === Math.ceil(rating) && !Number.isInteger(rating)) {
//           return <StarHalf key={value} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
//         } else {
//           return <Star key={value} className="w-4 h-4 text-gray-200" />;
//         }
//       })}
//       <span className="text-sm text-gray-500 ml-1">{rating}/5</span>
//     </div>
//   );
// }

// const ViewAll = () => {
//   const {addToCart} = useCart();

//   return (
//      <section className="py-8 md:py-16 font-Bold max-w-[1440px] mx-auto  ">
//           <div className="container mx-auto px-4">

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 font-satoshi r">
//               {Arrivals.map((product) => (
//                 <div
//                   key={product.id}
//                   className="group cursor-pointer"
//                   // Attach click handler
//                 >
//                   <div className="relative aspect-square mb-4 rounded-4xl overflow-hidden transform hover:scale-110 duration-300 ease-in-out">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                       className="object-contain p-4  "
//                     />
//                     {product.discount && (
//                       <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">

//                       </div>
//                     )}
//                   </div>
//                   <h3 className="font-bold mb-2 text-sm md:text-base font-satoshi">{product.name}</h3>
//                   <Rating rating={product.rating} />
//                   <div className="flex items-center gap-3 mt-2">
//                     <span className="font-bold font-satoshi">${product.price}</span>
//                     {product.originalPrice && (
//                       <span className="text-gray-400 line-through">${product.originalPrice}</span>
//                     )}
//                   </div>
//                   <button
//                     className="text-base w-full sm:w-[228px] h-[52px] hover:border-gray-300 border border-gray-200 px-4 py-2 rounded-full hover:bg-black hover:text-white hover:transition-transform ease-in-out transform hover:scale-110 duration-300"
//                     onClick={() =>
//                       addToCart({
//                         id: product.id,
//                         name: product.name,
//                         image: product.image,
//                         price: product.price,
//                         quantity: 1,
//                       })
//                     }
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mx-auto px-4 mt-8 md:mt-12 w-full bg-[#F5F5F5] h-[1px]">
//             <hr />
//           </div>
//         </section>
//   )
// }

// export default ViewAll
