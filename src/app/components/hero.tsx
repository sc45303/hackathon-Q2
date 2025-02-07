"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden max-w-[1440px] mx-auto ">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <h2 className="font-Bold  md:text-4xl lg: text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 md:font-extrabold ">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h2>
          <p className=" font-satoshi text-black/60  text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
            <Link
              href="/"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black text-white px-14 py-4 rounded-full transition-all transform hover:bg-black/80 hover:scale-110 duration-300 ease-in-out
              font-bold text-sm md:text-base"
            >
              Shop Now
            </Link>
          </div>
          <div className=" font-satoshin  flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px] md:hidden">
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                200+
              </span>
              <span className="font-Fontspring-DEMO-integralcf-regular text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                2,000+
              </span>
              <span className="font-Fontspring-DEMO-integralcf-regular text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                3,000+
              </span>
              <span className="font-Fontspring-DEMO-integralcf-regular text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
        </section>
        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
            src="/icons/big-start.png"
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-rotate-slow"
            height={104}
            width={104}
          />
          <Image
            src="/icons/smaal-star.png"
            alt="small star"
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-56 md:max-w-56 md:max-h-56  animate-rotate-slower"
            height={56}
            width={56}
          />
        </section>
      </div>
    </header>
  );
};

export default Hero;

// code with animtion
