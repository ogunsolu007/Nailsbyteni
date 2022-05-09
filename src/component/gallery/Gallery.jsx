import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./gallery.css";
import nails11 from "../../images/nails11.jpg";
import nails9 from "../../images/nails9.jpg";
import nails8 from "../../images/nails8.jpg";
import nails7 from "../../images/nails7.jpg";
import nails6 from "../../images/nails6.jpg";
import nails5 from "../../images/nails5.jpg";
import nails4 from "../../images/nails4.jpg";
import nails3 from "../../images/nails3.jpg";
import nails2 from "../../images/nails2.jpg";
import nails1 from "../../images/nails1.jpg";

const Gallery = () => {
  return (
    <>
      <div className="gallery" id="works">
        <div className="gallery_heading">
          <h1>Our Works</h1>
        </div>

        <div className="flex-wrap">
          <Carousel
            showStatus={false}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
          >
            <img src={nails11} alt="nails" />
            <img src={nails9} alt="nails" />
            <img src={nails3} alt="nails" />
            <img src={nails5} alt="nails" />
            <img src={nails8} alt="nails" />
            <img src={nails6} alt="nails" />
            <img src={nails4} alt="nails" />
            <img src={nails2} alt="nails" />
            <img src={nails7} alt="nails" />
            <img src={nails1} alt="nails" />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Gallery;
