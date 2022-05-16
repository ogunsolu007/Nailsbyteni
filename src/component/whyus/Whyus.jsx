import React from "react";
import "./whyus.css";
import nails3 from "../../images/nails3.jpg";
import nails4 from "../../images/nails4.jpg";
import nails5 from "../../images/nails5.jpg";
import nails8 from "../../images/nails8.jpg";
import ScrollAnimation from "react-animate-on-scroll";
const Whyus = () => {
  return (
    <>
      <div className="section_whyus">
        <div className="container flex">
          <ScrollAnimation animateIn="fadeIn" duration={6} delay={3}>
            <div className="whyus_img">
              <img src={nails4} alt="nailsimg" className="nails3 " />
              <img src={nails5} alt="" className="nails5" />
              <img src={nails3} alt="nailsimg" className="nails4 " />
              <img src={nails8} alt="" className="nails8" />{" "}
            </div>
          </ScrollAnimation>

          <div className="whyus_content">
            <ScrollAnimation animateIn="slideInUp" duration={3}>
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
            </ScrollAnimation>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
