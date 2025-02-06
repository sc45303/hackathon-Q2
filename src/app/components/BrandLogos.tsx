"use client";

import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "verce",
    srcUrl: "/icons/verce.png",
  },
  {
    id: "zara",
    srcUrl: "/icons/zara.png",
  },
  {
    id: "gucci",
    srcUrl: "/icons/gucci.png",
  },
  {
    id: "prada",
    srcUrl: "/icons/prada.png",
  },
  {
    id: "calvin-klein",
    srcUrl: "/icons/calvin.png",
  },
];

const BrandLogos = () => {
  return (
    <div className="bg-black  max-w-[1440px] mx-auto  ">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-6 ">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={150}
            width={150}
            alt={brand.id}
            className=" max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11  "
          />
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
