// import Image from "next/image";
// import React from "react";
// import { FaStar } from "react-icons/fa";

// interface ProductCardProps {
//   image: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   discount?: number;
//   rating: number;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   image,
//   name,
//   price,
//   originalPrice,
//   discount,
//   rating,
// }) => {
//   return (
//     <div className="p-4 border rounded-lg shadow-sm hover:shadow-md">
//       <Image
//         width={200}
//         height={200}
//         src={image}
//         alt={name}
//         className="rounded-md w-full mb-3"
//       />
//       <h3 className="font-medium text-lg mb-1">{name}</h3>
//       <div className="flex items-center mb-2">
//         <FaStar className="text-yellow-500 text-sm mr-1" />
//         <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
//       </div>
//       <div className="text-base font-bold text-black">
//         ${price.toFixed(2)}{" "}
//         {originalPrice && (
//           <span className="line-through text-sm font-normal text-gray-500 ml-2">
//             ${originalPrice.toFixed(2)}
//           </span>
//         )}
//         {discount && (
//           <span className="text-red-600 text-sm ml-2">-{discount}%</span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
