"use client";

import Hero from "./components/hero";
import BrandLogos from "./components/BrandLogos";
import { Reviews } from "./components/review";
import { Newsletter } from "./components/newslater";
import NewArrivals from "./components/new-arrivals";

import DressStyle from "./components/dressStyle";
import TopSelling from "./components/topSelling";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandLogos />

      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Newsletter />
      <Reviews />
      {/* <ProductCards /> */}
    </div>
  );
};

export default Home;
