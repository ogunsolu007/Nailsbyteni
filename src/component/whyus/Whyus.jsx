import React from "react";
import "./whyus.css";
import nails3 from "../../images/nails3.jpg";
import nails4 from "../../images/nails4.jpg";
const Whyus = () => {
  return (
    <>
      <div className="section_whyus">
        <div className="container flex">
          <div className="whyus_img">
            <img src={nails4} alt="nailsimg" className="nails3" />
            <div className="square"></div>
            <img src={nails3} alt="nailsimg" className="nails4" />
          </div>
          <div className="whyus_content">
            <h1>
              Why Our Clients <br />
              -----Choose Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima.
            </p>
            <p className="p2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, aspernatur? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Incidunt, aspernatur? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Incidunt, aspernatur?
            </p>
            <button className="btn_cta btn">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
