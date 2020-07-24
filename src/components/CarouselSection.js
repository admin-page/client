import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Img = styled.img`
  height: 400px;
`;

function CarouselSection() {
  return (
    <Carousel style={{ height: "400px" }} showThumbs={false} autoPlay>
      <div>
        <Img src="https://img.rea-asia.com/rumah123/750x420-crop/house/ho45/4551672/original/hos4551672-rumah-di-jual-di-bekasi-bekasi-15572081781048.jpg" />
      </div>
      <div>
        <Img src="https://id2-cdn.pgimgs.com/listing/16006591/UPHO.87508863.V800/Rumah-Baru-Permata-Buah-Batu-2-Type-50-90-Ready-Stock-Bandung-Indonesia.jpg" />
      </div>
      <div>
        <Img src="https://static-id.lamudi.com/static/media/cXVhbGl0eS83MA%3D%3D/2x2x2x700x340/25bf6eafda06f7.jpg" />
      </div>
    </Carousel>
  );
}

export default CarouselSection;
