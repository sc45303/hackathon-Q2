// "use client";

// import Image from "next/image";
// import React, { useState } from "react";

// const images: string[] = [
//   "/images/pic1.png",
//   "/images/pic2.png",
//   "/images/pic3.png",
// ];

// const ProductImageGallery: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<string>(images[0]);

//   return (
//     <div>
//       {/* Main Image */}
//       <div className="border rounded-lg font-satoshi">
//         <Image
//           src={selectedImage}
//           alt="Selected"
//           height={500}
//           width={500}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Thumbnails */}
//       <div className="flex mt-4 space-x-4">
//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedImage(image)}
//             className={`border-2 rounded-md ${
//               selectedImage === image ? "border-black" : "border-transparent"
//             }`}
//           >
//             <Image
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               height={100}
//               width={100}
//               className="w-16 h-16 object-cover"
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductImageGallery;

"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImageGallery = () => {
  const [path, setPath] = useState("");
  return (
    <div>
      <Image
        src={path ? path : "/images/pic9.png"}
        alt="alt"
        width={500}
        height={500}
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        <div>
          <Image
            className="cursor-pointer w-16 h-16 object-cover"
            src={"/images/pic10.png"}
            alt="alt"
            width={100}
            height={100}
            onClick={() => setPath("/images/pic10.png")}
          />
        </div>
        <div>
          <Image
            className="cursor-pointer w-16 h-16 object-cover"
            src={"/images/pic12.png"}
            alt="alt"
            width={100}
            height={100}
            onClick={() => setPath("/images/pic12.png")}
          />
        </div>
        <div>
          <Image
            className="cursor-pointer w-16 h-16 object-cover"
            src={"/images/pic1.png"}
            alt="alt"
            width={100}
            height={100}
            onClick={() => setPath("/images/pic1.png")}
          />
        </div>
        {/* <div>
          <Image src={"/images/pic2.png"} alt="alt" width={100} height={100} />
        </div>
        <div>
          <Image src={"/images/pic3.png"} alt="alt" width={100} height={100} />
        </div> */}
      </div>
    </div>
  );
};

export default ProductImageGallery;
