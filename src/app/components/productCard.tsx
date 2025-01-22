// import Rating from "@/components/ui/Rating";
// import Image from "next/image";
// import Link from "next/link";

// type ProductCardProps = {
//   src?: string; // Optional to handle missing images
//   title?: string; // Optional for cases where title is undefined
//   rating?: number; // Optional to handle missing rating
//   price?: number; // Optional for cases with no price
//   discount?: number; // Optional for products without a discount
//   originalPrice?: number; // Optional, in case originalPrice is missing
//   category?: string; // Optional to avoid breaking links
//   slug?: string; // Optional for safe linking
// };

// const ProductCardOfNewArrivals = ({
//   src = {}, // Default placeholder image
//   title = "Untitled Product",
//   rating = 0,
//   price = 0,
//   discount = 0,
//   category = "uncategorized",
//   slug = "#",
// }: ProductCardProps) => {
//   const discountedPrice =
//     discount > 0 ? price - (price * discount) / 100 : price;

//   return (
//     <div className="flex flex-col items-start aspect-auto">
//       {/* Image Section */}
//       <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden font-Bold">
//         <Link href={`/${category}/${slug}`} passHref>
//           <Image
//             src={src}
//             alt={title}
//             width={295}
//             height={295}
//             className="w-full h-full object-cover"
//             onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} // Fallback if image fails
//           />
//         </Link>
//       </div>

//       {/* Title */}
//       <h3 className="mt-2 text-lg font-bold font-serif">{title}</h3>

//       {/* Rating */}
//       <div className="flex items-center space-x-2">
//         <Rating rating={rating} />
//         <span className="text-sm text-gray-500">({rating.toFixed(1)})</span>
//       </div>

//       {/* Price Section */}
//       <div className="mt-2">
//         {price > 0 && (
//           <>
//             {/* Original Price */}
//             <p
//               className={`text-sm font-semibold font-satoshi ${
//                 discount > 0
//                   ? "line-through decoration-2 decoration-red-500/70"
//                   : ""
//               }`}
//             >
//               ${price.toFixed(2)}
//             </p>
//             {/* Discounted Price */}
//             {discount > 0 && (
//               <p className="text-sm font-semibold font-satoshi text-green-500">
//                 ${discountedPrice.toFixed(2)}
//               </p>
//             )}
//           </>
//         )}
//         {/* Message for Free or Missing Price */}
//         {price === 0 && (
//           <p className="text-sm font-semibold font-satoshi text-gray-500">
//             Free
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCardOfNewArrivals;
import React from "react";

const productCard = () => {
  return <div>Prodct card</div>;
};

export default productCard;
