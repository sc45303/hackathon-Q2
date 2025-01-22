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
      href={"/causal/"}
      className={[
        "w-full md:h-full rounded-[20px] bg-white bg-top text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover",
        className,
      ].join(" ")}
    >
      {title}
    </Link>
  );
};

const DressStyle = () => {
  return (
    <div className="px-4 xl:px-0 font-satoshi  max-w-[1440px] mx-auto  mt-10  ">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
        <h2 className="text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize font-Bold">
          BROWSE BY dress STYLE
        </h2>
        <div className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5 ">
          <DressStyleCard
            title="Casual"
            url="/imags/dress-style-1.png"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/dress-style-1.png')] transform hover:scale-110 duration-300 ease-in-out"
          />
          <DressStyleCard
            title="Formal"
            url="/images/dress-style-2.png"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/dress-style-2.png')] transform hover:scale-110 duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col sm:flex-row md:h-[289px] space-y-5 sm:space-y-0 sm:space-x-5">
          <DressStyleCard
            title="Party"
            url="/images/dress-style-3.png"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/dress-style-3.png')] transform hover:scale-110 duration-300 ease-in-out"
          />
          <DressStyleCard
            title="Gym"
            url="/images/dress-style-4.png"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/dress-style-4.png')] transform hover:scale-110 duration-300 ease-in-out"
          />
        </div>
      </section>
    </div>
  );
};

export default DressStyle;
