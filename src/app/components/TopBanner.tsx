import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const TopBanner = () => {
  return (
    <div className="bg-black text-white py-2 px-4 relative max-w-[1440px] mx-auto min-w-[410px]   ">
      <div className="container mx-auto flex items-center justify-center text-sm">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <Link href="/signup" className="underline hover:text-gray-200">
            Sign Up Now
          </Link>
        </p>
        <button
          className="absolute right-4 hover:text-gray-200"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
