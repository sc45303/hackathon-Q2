// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { Button } from "@/components/ui/button";
// import { FaStar } from "react-icons/fa";

// export interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   discountPercent?: number;
//   image?: any;
//   slug?: { current: string };
//   category: string;
//   colors?: string[];
//   sizes?: string[];
//   rating?: number;
//   description?: string;
//   isNew?: boolean;
// }

// interface FilterState {
//   category: string;
//   priceRange: [number, number];
//   colors: string[];
//   sizes: string[];
// }

// const star = [
//   <FaStar key={1} />,
//   <FaStar key={2} />,
//   <FaStar key={3} />,
//   <FaStar key={4} />,
//   <FaStar key={5} />,
// ];

// export default function ProductGridPage({
//   category = "",
// }: {
//   category?: string;
// }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [filters, setFilters] = useState<FilterState>({
//     category: category,
//     priceRange: [50, 200],
//     colors: [],
//     sizes: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const fetchedProducts: Product[] = await client.fetch(
//           `*[_type == 'product']{
//             "image": image.asset->url,
//             category,
//             discountPercent,
//             isNew,
//             name,
//             description,
//             price,
//             slug,
//             rating,
//             _id,
//             colors,
//             sizes
//           }`
//         );
//         setProducts(fetchedProducts);

//         // Filter initially based on passed category if available
//         const filtered = category
//           ? fetchedProducts.filter((product) => product.category === category)
//           : fetchedProducts;
//         setFilteredProducts(filtered);
//       } catch (err: any) {
//         setError("Failed to load products. Please try again later.");
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   // You can add more filtering logic here if needed

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen font-satoshi">
//         <p>Loading products...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500 font-bold">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-20 md:mt-28 lg:mt-32 max-w-screen-2xl mx-auto px-4">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8">
//         {filters.category
//           ? `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Products`
//           : "All Products"}
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div key={product._id} className="group relative">
//             <Link href={`/product/${product.slug?.current}`}>
//               <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden aspect-square">
//                 {product.image ? (
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt={product.name}
//                     width={400}
//                     height={400}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center bg-gray-200">
//                     <p>No Image</p>
//                   </div>
//                 )}
//               </div>
//             </Link>
//             <div className="mt-4">
//               <h3 className="font-bold text-lg">{product.name}</h3>
//               <div className="flex text-yellow-400 mt-1">
//                 {star.map((icon, index) => (
//                   <span key={index}>{icon}</span>
//                 ))}
//               </div>
//               <div className="mt-2">
//                 <span className="font-bold text-lg">
//                   ${product.price.toFixed(2)}
//                 </span>
//                 {product.discountPercent && (
//                   <span className="ml-2 text-gray-400 line-through">
//                     $
//                     {(
//                       (product.price * (100 + product.discountPercent)) /
//                       100
//                     ).toFixed(2)}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <Button
//           variant="outline"
//           className="px-12 py-6 rounded-full hover:bg-black hover:text-white transition-all"
//         >
//           View All Products
//         </Button>
//       </div>
//     </div>
//   );
// }
