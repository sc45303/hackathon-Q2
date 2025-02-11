"use client";

import React from "react";
import Link from "next/link";

export type DressStyleCardProps = {
  title: string;
  imageUrl: string; // renamed from url for clarity
  className?: string;
};

const DressStyleCard = ({
  title,
  imageUrl,
  className,
}: DressStyleCardProps) => {
  const categorySlug = title.toLowerCase();

  return (
    <Link
      href={`/category/${categorySlug}`}
      className={[
        "rounded-[20px] bg-white text-2xl md:text-4xl font-bold text-left p-6 md:p-9 bg-no-repeat bg-cover transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out",
        className,
      ].join(" ")}
      // Instead of relying on a dynamic class from CSS, set the background image inline:
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {title}
    </Link>
  );
};

export default DressStyleCard;
