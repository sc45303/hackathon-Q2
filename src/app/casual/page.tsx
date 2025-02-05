// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FaStar } from "react-icons/fa";
// import { urlFor } from "@/sanity/lib/image";
// import { Button } from "@/components/ui/button";
// import { Product } from "../../../types/products";

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

// export default function ProductGridPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [filters, setFilters] = useState<FilterState>({
//     category: "",
//     priceRange: [50, 200],
//     colors: [],
//     sizes: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const { category } = router.query;

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
//         setFilteredProducts(fetchedProducts);
//       } catch (err: any) {
//         setError("Failed to load products. Please try again later.");
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     if (category && typeof category === "string") {
//       setFilters(prev => ({ ...prev, category }));
//     }
//   }, [category]);

//   useEffect(() => {
//     let filtered = products;

//     if (filters.category) {
//       filtered = filtered.filter(product => product.category === filters.category);
//     }

//     filtered = filtered.filter(
//       product =>
//         product.price >= filters.priceRange[0] &&
//         product.price <= filters.priceRange[1]
//     );

//     if (filters.colors.length > 0) {
//       filtered = filtered.filter(product =>
//         product.colors?.some(color => filters.colors.includes(color))
//       );
//     }

//     if (filters.sizes.length > 0) {
//       filtered = filtered.filter(product =>
//         product.sizes?.some(size => filters.sizes.includes(size))
//       );
//     }

//     setFilteredProducts(filtered);
//   }, [filters, products]);

//   const handleFilterChange = (type: keyof FilterState, value: any) => {
//     setFilters(prev => {
//       if (type === "colors" || type === "sizes") {
//         return {
//           ...prev,
//           [type]: prev[type].includes(value)
//             ? prev[type].filter(item => item !== value)
//             : [...prev[type], value]
//         };
//       }
//       return { ...prev, [type]: value };
//     });
//   };

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
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filters Sidebar */}
//         <div className="w-full md:w-64 space-y-6">
//           <div className="bg-gray-50 p-4 rounded-lg shadow">
//             <h3 className="font-bold mb-4">Filters</h3>

//             {/* Category Filter */}
//             <div className="mb-6">
//               <h4 className="font-medium mb-2">Categories</h4>
//               <ul className="space-y-2">
//                 {['tshirt', 'short', 'jeans', 'hoodie', 'shirt'].map(cat => (
//                   <li
//                     key={cat}
//                     className={`cursor-pointer ${
//                       filters.category === cat ? 'font-bold' : ''
//                     }`}
//                     onClick={() => handleFilterChange('category', cat)}
//                   >
//                     {cat.charAt(0).toUpperCase() + cat.slice(1)}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Price Filter */}
//             <div className="mb-6">
//               <h4 className="font-medium mb-2">Price Range</h4>
//               <input
//                 type="range"
//                 min="0"
//                 max="500"
//                 value={filters.priceRange[1]}
//                 onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
//                 className="w-full"
//               />
//               <div className="text-sm">
//                 ${filters.priceRange[0]} - ${filters.priceRange[1]}
//               </div>
//             </div>

//             {/* Color Filter */}
//             <div className="mb-6">
//               <h4 className="font-medium mb-2">Colors</h4>
//               <div className="grid grid-cols-3 gap-2">
//                 {['red', 'blue', 'green', 'black', 'white'].map(color => (
//                   <div
//                     key={color}
//                     className={`h-6 rounded cursor-pointer border ${
//                       filters.colors.includes(color) ? 'ring-2 ring-black' : ''
//                     }`}
//                     style={{ backgroundColor: color }}
//                     onClick={() => handleFilterChange('colors', color)}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Size Filter */}
//             <div className="mb-6">
//               <h4 className="font-medium mb-2">Sizes</h4>
//               <div className="grid grid-cols-3 gap-2">
//                 {['S', 'M', 'L', 'XL'].map(size => (
//                   <div
//                     key={size}
//                     className={`p-1 text-center border rounded cursor-pointer ${
//                       filters.sizes.includes(size) ? 'bg-black text-white' : ''
//                     }`}
//                     onClick={() => handleFilterChange('sizes', size)}
//                   >
//                     {size}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold mb-8">
//             {filters.category ?
//               `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Products` :
//               'All Products'}
//           </h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProducts.map(product => (
//               <div key={product._id} className="group relative">
//                 <Link href={`/product/${product.slug?.current}`}>
//                   <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden aspect-square">
//                     {product.image ? (
//                       <Image
//                         src={urlFor(product.image).url()}
//                         alt={product.name}
//                         width={400}
//                         height={400}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center bg-gray-200">
//                         <p>No Image</p>
//                       </div>
//                     )}
//                   </div>
//                 </Link>

//                 <div className="mt-4">
//                   <h3 className="font-bold text-lg">{product.name}</h3>
//                   <div className="flex text-yellow-400 mt-1">
//                     {star.map((icon, index) => (
//                       <span key={index}>{icon}</span>
//                     ))}
//                   </div>
//                   <div className="mt-2">
//                     <span className="font-bold text-lg">
//                       ${product.price.toFixed(2)}
//                     </span>
//                     {product.discountPercent && (
//                       <span className="ml-2 text-gray-400 line-through">
//                         ${(product.price * (100 + product.discountPercent) / 100).toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
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

import React from "react";

const page = () => {
  return <div>lolo</div>;
};

export default page;
