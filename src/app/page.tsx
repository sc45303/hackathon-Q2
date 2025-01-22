import React from "react";
import Hero from "./components/hero";
import BrandLogos from "./components/BrandLogos";
import { Reviews } from "./components/review";
import { Newsletter } from "./components/newslater";
import NewArrivals from "./components/new-arrivals";
// import TopSelling from "./components/topSelling";
import TopSellingProduct from "./components/topSelling";
import DressStyle from "./components/dressStyle";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandLogos />
      <NewArrivals />
      <TopSellingProduct />
      <DressStyle />
      <Newsletter />
      <Reviews />
      {/* <ProductCards /> */}
    </div>
  );
};

export default Home;
