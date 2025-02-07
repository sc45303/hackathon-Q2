// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import ColorSelector from "@/components/ColorSelector";
// import QuantitySelector from "@/components/QuantitySelector";
// import AddToCartButton from "@/components/AddToCartButton";
// import { Product } from "../../../types/products";
// import { useCart } from "./cartContext"; // Import the useCart hook
// import SizeSelector from "@/components/SizeSlector";
// import Swal from "sweetalert2";

// interface ProductPageClientWrapperProps {
//   product: Product;
// }

// const ProductPageClientWrapper: React.FC<ProductPageClientWrapperProps> = ({
//   product,
// }) => {
//   const { addToCart } = useCart();

//   // State for selected options
//   const [selectedColor, setSelectedColor] = useState<string>("");
//   const [selectedSize, setSelectedSize] = useState<string>("");
//   const [quantity, setQuantity] = useState<number>(1);

//   const handleAddToCart = () => {
//     addToCart({
//       id: product._id,
//       name: product.name,
//       price: product.price,
//       image: product.image ? urlFor(product.image).url() : "",
//       quantity,
//       color: selectedColor,
//       size: selectedSize,
//     });
//     Swal.fire({
//       position: "top-right",
//       icon: "success",
//       title: `${product.name} added to cart`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="mt-0 md:mt-12  ">
//       <div className="flex h-full mt-0 items-center flex-col md:flex-row justify-center sm:justify-evenly  sm:p-0 max-w-screen-2xl mx-auto     ">
//         {/* Left */}
//         <div className="flex space-x-4 md:space-x-0  md:space-y-3 p-5 md:flex-col justify-between items-center md:w-[200px]  order-2 md:order-1">
//           {product.image && (
//             <Image
//               key={product._id}
//               src={urlFor(product.image).url()}
//               className="w-auto  h-auto md:h-[150px] lg:mt-3 rounded-[20px]"
//               alt={product.name}
//               width={195}
//               height={258}
//             />
//           )}
//           {product.image && (
//             <Image
//               key={product._id}
//               src={urlFor(product.image).url()}
//               className="w-auto  h-auto md:h-[150px] lg:mt-3 rounded-[20px]"
//               alt={product.name}
//               width={195}
//               height={258}
//             />
//           )}
//           {product.image && (
//             <Image
//               key={product._id}
//               src={urlFor(product.image).url()}
//               className="w-auto  h-auto md:h-[150px] lg:mt-3 rounded-[20px]"
//               alt={product.name}
//               width={195}
//               height={258}
//             />
//           )}
//         </div>
//         {/* Mid */}
//         <div className="w-[90%] pb-3  h-[260px] lg:w-[500px] md:h-[500px] mt-5 lg:mt-0 order-1 md::order-2">
//           {product.image && (
//             <Image
//               key={product._id}
//               src={urlFor(product.image).url()}
//               className=" w-full h-full sm:mt-3 rounded-[20px]"
//               alt={product.name}
//               width={100}
//               height={100}
//             />
//           )}
//         </div>
//         {/* Right */}
//         <div className="w-full p-5 lg:w-[500px] lg:h-[500px]  order-3  ">
//           <h1 className="text-2xl lg:text-3xl font-Bold mb-4">
//             {product.name}
//           </h1>
//           {/* <h1 className="text-2xl lg:text-3xl font-Bold">{product.price}</h1> */}
//           <div className="flex text-yellow-400">{product.rating}</div>
//           <div className="flex items-center space-x-2"></div>
//           <p className="text-sm">{product.description}</p>
//           {/* Select Color */}
//           <div className="mt-2">
//             <div className="w-full text-black mt-1 ">
//               <ColorSelector onSelectColor={setSelectedColor} />
//               <SizeSelector
//                 onSelectSize={(size) => setSelectedSize(size)} // Pass the setSelectedSize function
//               />
//               <QuantitySelector
//                 onSelectQuantity={(qty) => setQuantity(qty)} // Pass the setQuantity function
//                 initialQuantity={1}
//               />
//             </div>
//           </div>
//           {/* Add to Cart Button */}
//           <div className="mt-4">
//             <AddToCartButton onClick={handleAddToCart} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPageClientWrapper;

// ai code

"use client";
import { motion } from "framer-motion"; // Import motion
import React, { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ColorSelector from "@/components/ColorSelector";
import QuantitySelector from "@/components/QuantitySelector";
import AddToCartButton from "@/components/AddToCartButton";
import { Product } from "../../../types/products";
import { useCart } from "./cartContext"; // Import the useCart hook
import SizeSelector from "@/components/SizeSlector";

interface ProductPageClientWrapperProps {
  product: Product;
}

const ProductPageClientWrapper: React.FC<ProductPageClientWrapperProps> = ({
  product,
}) => {
  const { addToCart } = useCart();

  // State for selected options
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [showCart, setShowCart] = useState(false); // State for showing/hiding notification

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image ? urlFor(product.image).url() : "",
      quantity,
      color: selectedColor,
      size: selectedSize,
    });

    // Show notification
    setShowCart(true); // Show cart notification
    setTimeout(() => setShowCart(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="mt-0 md:mt-12">
      <div className="flex h-full mt-0 items-center flex-col md:flex-row justify-center sm:justify-evenly sm:p-0 max-w-screen-2xl mx-auto line-clamp-3">
        {/* Left */}
        <div className="flex space-x-4 md:space-x-0 md:space-y-3 p-5 md:flex-col justify-between items-center md:w-[200px] order-2 md:order-1 ">
          {product.image &&
            [0, 1, 2].map((index) => (
              <Image
                key={`${product._id}-image-${index}`}
                src={product.image ? urlFor(product.image).url() : ""}
                className="w-auto h-auto md:h-[150px] lg:mt-3 rounded-[20px]"
                alt={product.name}
                width={195}
                height={258}
              />
            ))}
        </div>

        {/* Mid */}
        <div className="w-[90%] pb-3 h-[260px] lg:w-[500px] md:h-[500px] mt-5 lg:mt-0 order-1 md:order-2">
          {product.image && (
            <Image
              key={`${product._id}-main-image`}
              src={urlFor(product.image).url()}
              className="w-full h-full sm:mt-3 rounded-[20px]"
              alt={product.name}
              width={100}
              height={100}
            />
          )}
        </div>

        {/* Right */}
        <div className="w-full p-5 lg:w-[500px] lg:h-[500px] order-3">
          <h1 className="text-2xl lg:text-3xl font-Bold mb-4">
            {product.name}
          </h1>
          <div className="flex text-yellow-400">{product.rating}</div>
          <p className="text-sm">{product.description}</p>

          {/* Select Color */}
          <div className="mt-2">
            <div className="w-full text-black mt-1">
              <ColorSelector onSelectColor={setSelectedColor} />
              <SizeSelector onSelectSize={(size) => setSelectedSize(size)} />
              <QuantitySelector
                onSelectQuantity={(qty) => setQuantity(qty)}
                initialQuantity={1}
              />
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-4">
            <AddToCartButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>

      {/* Cart Notification */}
      {showCart && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-0 p-4 bg-green-500 text-white rounded-lg shadow-lg"
        >
          <strong>{product.name}</strong> added to your cart!
        </motion.div>
      )}
    </div>
  );
};

export default ProductPageClientWrapper;
