// import { client } from "@/sanity/lib/client";
// import { Product } from "../../../../types/products";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import ColorSelector from "@/components/ColorSelector";
// import QuantitySelectorCart from "@/app/cart/QuantitySelector";
// import SizeSelector from "@/components/SizeSlector";
// import AddToCartButton from "@/components/AddToCartButton";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }
// async function getProduct(slug: string): Promise<Product> {
//   const product = await client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       name,
//       description,
//       price,
//       "image": image.asset->url,
//       slug,
//       rating
//     }`,
//     { slug }
//   );
//   return product;
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(slug);

//   return (
//     <>
//       {/* <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12   ">
//           <div className="aspect-square ">
//             {product.image ? (
//               <Image
//                 src={urlFor(product.image).url() || ""}
//                 alt={product.name || "Product Image"}
//                 width={500}
//                 height={500}
//                 className="rounded-lg"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
//                 <p>No Image Available</p>
//               </div>
//             )}
//           </div>
//           <div className="flex flex-col gap-8">
//             <h1 className="text-4xl font-bold">{product.name}</h1>
//             <p className="font-samibold text-2xl">{product.price}</p>
//           </div>
//         </div>
//       </div> */}
//       <div className="mt-28 md:mt-36">
//         <div className="flex h-full items-center flex-col md:flex-row justify-center sm:justify-evenly  sm:p-0 max-w-screen-2xl mx-auto">
//           {/* Left */}
//           <div className="flex space-x-4 md:space-x-0  md:space-y-3 p-5 md:flex-col justify-between items-center md:w-[200px]  order-2 md:order-1">
//             {product.image && (
//               <Image
//                 key={product._id}
//                 src={urlFor(product.image).url()}
//                 className="w-[100px]  h-[100px] md:h-[150px] lg:mt-3 rounded-[20px]"
//                 alt={product.name}
//                 width={100}
//                 height={100}
//               />
//             )}
//             {product.image && (
//               <Image
//                 key={product._id}
//                 src={urlFor(product.image).url()}
//                 className="w-[100px]  h-[100px] md:h-[150px] lg:mt-3 rounded-[20px]"
//                 alt={product.name}
//                 width={100}
//                 height={100}
//               />
//             )}
//             {product.image && (
//               <Image
//                 key={product._id}
//                 src={urlFor(product.image).url()}
//                 className="w-[100px]  h-[100px] md:h-[150px] lg:mt-3 rounded-[20px]"
//                 alt={product.name}
//                 width={100}
//                 height={100}
//               />
//             )}
//           </div>
//           {/* Mid */}
//           <div className="w-[90%] pb-3  h-[260px] lg:w-[500px] md:h-[500px] mt-5 lg:mt-0 order-1 md::order-2">
//             {product.image && (
//               <Image
//                 key={product._id}
//                 src={urlFor(product.image).url()}
//                 className=" w-full h-full sm:mt-3 rounded-[20px]"
//                 alt={product.name}
//                 width={100}
//                 height={100}
//               />
//             )}
//           </div>
//           {/* Right */}
//           <div className="w-full p-5 lg:w-[500px] lg:h-[500px]  order-3  mt-12 ">
//             <h1 className="text-2xl lg:text-3xl font-Bold">{product.name}</h1>
//             <div className="flex text-yellow-400">{product.rating}</div>
//             <div className="flex items-center space-x-2"></div>
//             <p className="text-sm">{product.description}</p>
//             {/* Select Color */}
//             <div className="mt-2">
//               <p className="w-full text-black mt-1 ">
//                 <ColorSelector />
//                 <QuantitySelectorCart />
//                 <SizeSelector />
//               </p>
//               {/* <div className="flex space-x-3 "> */}
//               {/* </div> */}
//             </div>
//             {/* Choose Size */}
//             <div className="mt-4">
//               <p className="text-gray-500"></p>
//               <AddToCartButton />
//               <div className="flex space-x-3 mt-2"></div>
//             </div>
//             {/* Quantity & Add to Cart */}
//             <div className="flex justify-start items-center mt-7 space-x-4">
//               {/* <Button onClick={()=>handleadd(cartItem)} className="bg-black text-white w-[300px]">Add to Cart</Button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import ProductPageClientWrapper from "@/app/cart/ProductPageClientWrapper";
import { Suspense } from "react";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  const product = await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      description,
      price,
      "image": image.asset->url,
      slug,
      rating
    }`,
    { slug }
  );
  return product;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
          </div>
        }
      >
        <ProductPageClientWrapper product={product} />
      </Suspense>
    </>
  );
}
