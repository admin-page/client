import React from "react";

import Carousel from "../../components/CarouselSection";

import RecomendSection from "../../components/RecomendSection";
import PopulerSection from "../../components/PopulerSection";

function Home() {
  return (
    <div>
      <Carousel />
      <RecomendSection />
      <PopulerSection />
    </div>
  );
}

export default Home;
