// "use client";
// import React from "react";
// // import React from "react";
// import ProductCard from "../components/productCard";
// import { useAppSelector } from "../store/hooks";

// // const Categoryproduct = [

// // ];

// // const Category = async ({ params }: any) => {
// //   const { Product } = await params;
// //   console.log(Product);

// //   return (
// //     <section className="py-8 md:py-16 font-satoshi max-w-[1440px] mx-auto px-4">
// //       <div className="text-center mb-6 md:mb-12">
// //         <h2 className="text-2xl md:text-4xl font-bold capitalize">
// //           {params.category}
// //         </h2>
// //       </div>

// //       {/* Grid Layout */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
// //          {bestSell.map((product) => (
// //           <ProductCard
// //             key={product.id}
// //             data={{
// //               title: product.name,
// //               srcUrl: product.image,
// //               rating: product.rating,
// //               originalPrice: product.originalPrice,

// //               price: product.price,
// //               discount: product.discount,
// //               priceAfterDiscount: product.discount
// //                 ? product.price - (product.price * product.discount) / 100
// //                 : null,
// //               category: "shirts",
// //               slug: product.slug,
// //             }}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Category

// const Category = ({ params }: { params: Promise<{ category: string }> }) => {
//   const [categoryParam, setCategoryParam] = React.useState<string | null>(null);

//   // Unwrap the params promise
//   React.useEffect(() => {
//     const fetchCategory = async () => {
//       const resolvedParams = await params; // Unwrapping the Promise
//       setCategoryParam(resolvedParams.category); // Set the category value
//     };
//     fetchCategory();
//   }, [params]);

//   // Using categoryParam in your selector
//   const products = useAppSelector((state) => state.products);
//   const bestSell = categoryParam
//     ? products.filter((val) => val.category === categoryParam)
//     : [];

//   return (
//     <section className="py-8 md:py-16 font-satoshi max-w-[1440px] mx-auto px-4">
//       <div className="text-center mb-6 md:mb-12">
//         <h2 className="text-2xl md:text-4xl font-Bold capitalize ">
//           {categoryParam}
//         </h2>
//       </div>

//       {/* category page starts here */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
//         {bestSell.map((items: any, i) => (
//           <ProductCard
//             key={i}
//             src={items.image[0]}
//             title={items.title}
//             price={items.rating}
//             rating={items.rating}
//             category={items.category}
//             originalPrice={items.originalPrice}
//             discount={items.discount ?? 0}
//             slug={items.slug}
//             priceAfterDiscount={items.price}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Category;
// import React from "react";

// const page = () => {
//   return <div>hom</div>;
// };

// export default page;
import React from "react";

const page = () => {
  return <div>{/* home */}</div>;
};

export default page;
