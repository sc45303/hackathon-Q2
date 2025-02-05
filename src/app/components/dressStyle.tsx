import React from "react";
import Link from "next/link";

type DressStyleCardProps = {
  title: string;
  url: string;
  className?: string;
};

const DressStyleCard = ({ title, className }: DressStyleCardProps) => {
  return (
    <Link
      href={"/casual"}
      className={[
        "rounded-[20px] bg-white text-2xl md:text-4xl font-bold text-left p-6 md:p-9 bg-no-repeat bg-cover transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out",
        className,
      ].join(" ")}
    >
      {title}
    </Link>
  );
};

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0 font-satoshi max-w-[1440px] mx-auto">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
        <h2 className="text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize font-Bold">
          Browse by Dress Style
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DressStyleCard
            title="casual"
            url="/images/dress-style-1.png"
            className="h-[190px] md:h-[250px] bg-[url('/images/dress-style-1.png')]"
          />

          <DressStyleCard
            title="Formal"
            url="/images/dress-style-2.png"
            className="h-[190px] md:h-[250px] bg-[url('/images/dress-style-2.png')] col-span-1 sm:col-span-2"
          />
          <DressStyleCard
            title="Party"
            url="/images/dress-style-3.png"
            className="h-[190px] md:h-[250px] bg-[url('/images/dress-style-3.png')] col-span-1 sm:col-span-2"
          />
          <DressStyleCard
            title="Gym"
            url="/images/dress-style-4.png"
            className="h-[190px] md:h-[250px] bg-[url('/images/dress-style-4.png')]"
          />
        </div>
      </section>
    </div>
  );
};

export default DressStyle;
