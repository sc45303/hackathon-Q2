// "use client";
// import { Button } from "@/components/ui/button";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// import { FaStar } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { Product } from "types/products";

// // Star icons array
// const star = [
//   <FaStar key={1} />,
//   <FaStar key={2} />,
//   <FaStar key={3} />,
//   <FaStar key={4} />,
//   <FaStar key={5} />,
// ];

// export default function NewArrivals(params: { params: { slug: string } }) {
//   const [product, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Fetch products with error handling
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

//           }[1...20]`
//         );
//         setProducts(fetchedProducts);
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       } catch (err: any) {
//         setError("Failed to load products. Please try again later.");
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

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
//     <div className="w-full h-full  mt-20  max-w-[1440px] mx-auto min-w-[410px]">
//       <h1 className="text-3xl md:text-4xl font-Bold ">{params.params.slug}</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-4 mt-12 min-w-[410px]">
//         {product.map((product) => (
//           <div key={product._id} className="flex-shrink-0">
//             <Link href={`/product/${product.slug?.current}`}>
//               <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
//                 {product.image ? (
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt={product.name}
//                     className="w-full h-full rounded-[20px]"
//                     width={100}
//                     height={100}
//                   />
//                 ) : (
//                   <div className="w-full h-full flex justify-center items-center bg-gray-300 rounded-[20px]">
//                     <p>No Image</p>
//                   </div>
//                 )}
//               </div>
//             </Link>
//             <div className="pl-2">
//               <p className="text-lg mt-2 font-bold">{product.name}</p>
//               <div className="flex text-yellow-400">
//                 {star.map((icon, index) => (
//                   <span key={index}>{icon}</span>
//                 ))}
//               </div>
//               <p className="font-bold mt-1">
//                 ${product.price.toFixed(2)}
//                 {product.discountPercent ? (
//                   <span className="text-gray-400 font-bold line-through ml-2">
//                     {product.discountPercent}%
//                   </span>
//                 ) : null}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center items-start mt-10">
//         <Link href="/NewArrivals">
//           <Button
//             variant={"outline"}
//             className="sm:mt-0 sm:w-[200px]  w-full md:w-52 mb-5 md:mb-12  text-center hover:bg-black/80 transition-all text-black px-16 py-6 rounded-full  hover:bg-black hover:text-white hover:transition-transform  transform hover:scale-110 duration-300 ease-in-out"
//           >
//             View all
//           </Button>
//         </Link>
//       </div>
//       <hr className="border-gray-200 w-full mt-10 md:mt-0    " />
//     </div>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useState, useEffect, use } from "react";
import { Product } from "types/products";
import ProductFilters from "@/app/pages/productFilters";

const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

export default function NewArrivals({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    colors: [] as string[],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts: Product[] = await client.fetch(
          `*[_type == 'product' ]{
            "image": image.asset->url,
            category,
            discountPercent,
            isNew,
            name,
            description,
            price,
            slug,
            rating,
            _id,
            colors,
          }[1...20]`
        );
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const applyFilters = () => {
    let filtered = products.filter(
      (product) =>
        product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        product.colors?.some((c) => filters.colors.includes(c))
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-satoshi">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full min-w-[410px] h-full mt-20 max-w-[1440px] mx-auto  px-4">
      <div className="flex flex-col md:flex-row gap-8 min-w-[300px]">
        {/* फिल्टर साइडबार */}
        <ProductFilters onFilterChange={setFilters} />

        {/* प्रोडक्ट ग्रिड */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-Bold">{slug} </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12 min-w-[410px]">
            {filteredProducts.map((product) => (
              <div key={product._id} className="flex-shrink-0">
                <Link href={`/product/${product.slug?.current}`}>
                  <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                    {product.image ? (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        className="w-full h-full rounded-[20px]"
                        width={283}
                        height={290}
                      />
                    ) : (
                      <div className="w-full h-full flex justify-center items-center bg-gray-300 rounded-[20px]">
                        <p>No Image</p>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="pl-2">
                  <p className="text-lg mt-2 font-bold">{product.name}</p>
                  <div className="flex text-yellow-400">
                    {star.map((icon, index) => (
                      <span key={index}>{icon}</span>
                    ))}
                  </div>
                  <p className="font-bold mt-1">
                    ${product.price.toFixed(2)}
                    {product.discountPercent ? (
                      <span className="text-gray-400 font-bold line-through ml-2">
                        {product.discountPercent}%
                      </span>
                    ) : null}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-start mt-10">
            <Link href="/NewArrivals">
              <Button
                variant={"outline"}
                className="sm:mt-0 sm:w-[200px] w-full md:w-52 mb-5 md:mb-12 text-center hover:bg-black/80 transition-all text-black px-16 py-6 rounded-full hover:bg-black hover:text-white hover:transition-transform transform hover:scale-110 duration-300 ease-in-out"
              >
                View all
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 w-full mt-10 md:mt-0" />
    </div>
  );
}
